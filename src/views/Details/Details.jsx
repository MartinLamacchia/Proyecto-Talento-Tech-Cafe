import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const Details = () => {
  const { products, loading } = useCartContext();
  const { id } = useParams();
  const product = products.find((product) => product._id === id);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src={product?.image[0]}
          alt=""
          className={product?.type === "Grano" && styles.image}
        />
        <div className={styles.contentDescription}>
          <h3 className={styles.title}>{product?.name}</h3>
          <h3 className={styles.description}>{product?.description}</h3>
          <div className={styles.contentEssences}>
            <h4>Esencias:</h4>
            {product?.essences.map((product) => (
              <h4>{product}</h4>
            ))}
          </div>
          <div className={styles.contentWeight}>
            <h4 className={styles.weight}>
              {product?.type === "Capsulas" ? "Cantidad: " : "Peso: "}{" "}
              {product?.weight}{" "}
              {product?.type === "Capsulas" ? "Capsulas" : "Gramos"}
            </h4>
            <h4 className={styles.price}>${product?.price}</h4>
          </div>
        </div>
      </div>
      <Link to="/productsStore">
        <button className={styles.btnBackToProducts}>Volver a Productos</button>
      </Link>
      {loading && (
        <div className={styles.containerLoading}>
          <h1>Cargando...</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
