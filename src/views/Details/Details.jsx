import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Details.module.css";
import {Link} from "react-router-dom"

const Details = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://api-cafes-production.up.railway.app/getProducts"
        );
        const filterProduct = data.filter((product) => product._id === id);

        setProduct(filterProduct);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };

    getProducts();
  }, []);

  console.log(product);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={product[0]?.image[0]} alt=""  className={product[0]?.type === "Grano" && styles.image}/>
        <div className={styles.contentDescription}>
          <h3 className={styles.title}>{product[0]?.name}</h3>
          <h3 className={styles.description}>{product[0]?.description}</h3>
          <div className={styles.contentEssences}>
            <h4>Esencias:</h4>
            {product?.map((product) => (
              <h4>{product?.essences}</h4>
            ))}
          </div>
          <div className={styles.contentWeight}>
            <h4 className={styles.weight}>
              {product[0]?.type === "Capsulas" ? "Cantidad: " : "Peso: "}{" "}
              {product[0]?.weight}{" "}
              {product[0]?.type === "Capsulas" ? "Capsulas" : "Gramos"}
            </h4>
            <h4 className={styles.price}>${product[0]?.price}</h4>
          </div>
        </div>
      </div>
      <Link to="/productsStore">
      <button className={styles.btnBackToProducts}>Volver a Productos</button>
      </Link>
      {
        loading && (
          <div className={styles.containerLoading}>
            <h1>Cargando...</h1>
          </div>
        )
      }
    </div>
  );
};

export default Details;
