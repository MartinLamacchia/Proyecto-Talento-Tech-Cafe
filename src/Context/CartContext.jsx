import React, {createContext, useState, useEffect, useContext} from "react"
import axios from "axios";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productToCart, setProductToCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://api-cafes-production.up.railway.app/getProducts"
        );

        const coffeesRate = data.sort((a, b) => b.rate - a.rate);
        setProducts(coffeesRate);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setTimeout(() => {setLoading(false)}, 800);
      }
    };

    getProducts();
  }, []);

  const priceTotal = productToCart.reduce((valueBefore, product) => {
    return valueBefore + product.price * product.amount;
  }, 0);

  const addOrDeleteProduct = (e) => {
    if (e.target.innerText === "Agregar") {
      const newProduct = productToCart.map((product) => {
        if (product.id === e.target.id) {
          let newAmount = product.amount + 1;
          let newProduct = { ...product, amount: newAmount };
          return newProduct;
        } else {
          return product;
        }
      });

      setProductToCart(newProduct);
    }

    if (e.target.innerText === "Eliminar") {
      const newProduct = productToCart.map((product) => {
        if (product.id === e.target.id) {
          let newAmount = product.amount - 1;
          let newProduct = { ...product, amount: newAmount };

          return newProduct;
        } else {
          return product;
        }
      });

      setProductToCart(newProduct);
    }
  };


  const value = {
    products,
    loading,
    productToCart,
    setProductToCart,
    priceTotal,
    addOrDeleteProduct
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )

}

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de AppProvider");
  }
  return context
}

