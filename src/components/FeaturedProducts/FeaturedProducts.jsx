import React from "react";
import ImgCafe from "../../assets/Cafe/1-Photoroom.png";
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  return (
    <div className={styles.container}>
      <h2>Productos Destacados</h2>
      <div className={styles.containerProducts}>
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
        </div>
        <div className={styles.containerCoffee}>
          <img src={ImgCafe} alt="" />
          <div className={styles.containerSpan}>
            <span className={styles.span1}>Scegliere</span>
            <span className={styles.span2}>Citricos</span>
            <span className={styles.span3}>Frutos Secos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
