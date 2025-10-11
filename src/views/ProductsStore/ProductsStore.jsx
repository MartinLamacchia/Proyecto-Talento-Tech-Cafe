import React, { useEffect, useState } from "react";
import styles from "./ProductsStore.module.css";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const ProductsStore = ({setProductToCart, productToCart}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <div className={styles.content}>
        <h1>Productos</h1>
        <div className={styles.containerProducts}>
          {products.map((product) => (
            <Card
              key={product.name}
              id={product._id}
              name={product.name}
              description={product.description}
              image={product.image}
              essences={product.essences}
              price={product.price}
              type={product.type}
              weight={product.weight}
              rate={product.rate}
              stock={product.stock}
              views={product.views}
              productToCart={productToCart}
              setProductToCart={setProductToCart}
            />
          ))}
        </div>
      </div>
      {
        loading && (
          <div className={styles.containerLoading}>
            <h1>Cargando...</h1>
          </div>
        )
      }
      <Footer/>
    </>
  );
};

export default ProductsStore;
