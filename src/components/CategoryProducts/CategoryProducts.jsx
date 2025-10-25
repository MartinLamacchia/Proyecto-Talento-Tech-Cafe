import React from "react";
import styles from "./CategoryProducts.module.css";
import Img1 from "../../assets/pexels-bruno-saito-1366548-15885452.jpg";
import Img2 from "../../assets/pexels-esra-afsar-123882149-33669275.jpg";
import Img3 from "../../assets/pexels-amirho3intavkooli-19845393.jpg";

const CategoryProducts = () => {
  return (
    <div className={styles.container}>
      <h2>Productos disponibles</h2>
      <div className={styles.containerProducts}>
        <div className={styles.containerImages}>
          <span>Capsulas de Cafe</span>
          <div className={styles.contenImage}>
            <img src={Img1} alt="" />
          </div>
        </div>
        <div className={styles.containerImages}>
          <span>Cafe en Grano</span>
          <div className={styles.contenImage}>
            <img src={Img2} alt="" />
          </div>
        </div>
        <div className={styles.containerImages}>
          <span>Cafe Molido</span>
          <div className={styles.contenImage}>
            <img src={Img3} alt="" className={styles.img3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
