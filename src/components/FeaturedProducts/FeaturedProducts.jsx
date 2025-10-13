import React, { useEffect, useState } from "react";
import ImgCafe from "../../assets/Cafe/1-Photoroom.png";
import styles from "./FeaturedProducts.module.css";
import axios from "axios";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

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
      }
    };

    getProducts();
  }, []);

  console.log(products);

  return (
    <div className={styles.container}>
      <h2>Productos Destacados</h2>
      <div className={styles.containerProducts}>
        {products.map(
          (product, index) =>
            index < 3 && (
              <div className={styles.containerCoffee}>
                <img src={product.image[0]} alt="" className={product.type === "Capsulas" && styles.imgCapsule}/>
                <div className={styles.containerSpan}>
                  <span className={styles.span1}>{product.name}</span>
                  {product.essences.map((essence) => (
                    <span className={essence === "Chocolate" ? styles.chocolate : essence === "Especias" ? styles.spices : essence === "Cítricos" ? styles.citrusFruits : essence === "Frutos Secos" ? styles.nuts : essence === "Miel" && styles.honney}>{essence}</span>
                  ))}
                </div>
              </div>
            )
        )}

        {/* <div className={styles.containerCoffee}>
          <img src={ImgCafe} alt="" />
          <div className={styles.containerSpan}>
            <span className={styles.span1}>Scegliere</span>
            <span className={styles.span2}>Citricos</span>
            <span className={styles.span3}>Frutos Secos</span>
          </div>
        </div>
        <div className={styles.containerCoffee}>
          <img src={ImgCafe} alt="" />
          <div className={styles.containerSpan}>
            <span className={styles.span1}>Scegliere</span>
            <span className={styles.span2}>Citricos</span>
            <span className={styles.span3}>Frutos Secos</span>
          </div>
        </div>
        <div className={styles.containerCoffee}>
          <img src={ImgCafe} alt="" />
          <div className={styles.containerSpan}>
            <span className={styles.span1}>Scegliere</span>
            <span className={styles.span2}>Citricos</span>
            <span className={styles.span3}>Frutos Secos</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
