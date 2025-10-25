import React, { useEffect, useState } from "react";
import styles from "./ProductsStore.module.css";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import { useCartContext } from "../../Context/CartContext";

const ProductsStore = () => {
  const { products, loading } = useCartContext();

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
            />
          ))}
        </div>
      </div>
      {loading && (
        <div className={styles.containerLoading}>
          <h1>Cargando...</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductsStore;
