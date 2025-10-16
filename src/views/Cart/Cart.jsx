import React from "react";
import styles from "./Cart.module.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Cart = ({ productToCart, setProductToCart, isAutenticate, setOpenLogin }) => {
  const navigate = useNavigate()
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

  const emptycart = () => {
    setProductToCart([]);
  };

  const goToPayment = () => {
    if (!isAutenticate) {
      setOpenLogin(true)
    }else{
      navigate("/payment")
    }
  }

  return (
    <>
      <h2>Carrito de compras</h2>

      <div className={styles.container}>
        <div className={styles.containerListProducts}>
          <div className={styles.conainerList}>
            <h4>Imagen</h4>
            <h4>Nombre</h4>
            <h4>Descripcion</h4>
            <h4>Cantidad</h4>
            <h4>Precio</h4>
          </div>
          {productToCart.length < 1 ? (
            <div className={styles.conainerCartEmpty}>
              <p>No hay productos agregados al carrito</p>
            </div>
          ) : (
            productToCart.map((product) => (
              <div className={styles.conainerProducts}>
                <img src={product.image[0]} alt="" />
                <h4>{product?.name}</h4>
                <p>{product.description}</p>
                <h4>{product.amount}</h4>
                <h4>${product.price * product.amount}</h4>
                <div className={styles.containerBtn}>
                  <button
                    id={product.id}
                    className={styles.btnAdd}
                    onClick={addOrDeleteProduct}
                  >
                    Agregar
                  </button>
                  <button
                    id={product.id}
                    className={
                      product.amount > 1
                        ? styles.btnDelete
                        : styles.btnDeleteDisable
                    }
                    disabled={product.amount <= 1}
                    onClick={addOrDeleteProduct}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className={styles.containerTotal}>
        <div className={styles.contentTotal}>
          <button onClick={emptycart}>Vaciar Carrito</button>
          <h3>Total: ${priceTotal}</h3>
        </div>
        {
          productToCart.length > 0 && (
            <button className={isAutenticate ? styles.paymentShow : styles.paymentNoShow} onClick={goToPayment}>Pagar</button>
          )
        }
      </div>
      <Footer />
    </>
  );
};

export default Cart;
