import React from "react";
import styles from "./CategoryProducts.module.css";
import Img1 from "../../assets/pexels-bruno-saito-1366548-15885452.jpg";
import Img2 from "../../assets/pexels-esra-afsar-123882149-33669275.jpg";
import Img3 from "../../assets/pexels-amirho3intavkooli-19845393.jpg";
import Img4 from '../../assets/pexels-picturemechaniq-1749303.jpg'

const CategoryProducts = () => {
  return (
    <div className={styles.container}>
      <h2>Productos disponibles</h2>
      <div className={styles.containerProducts}>
        <div className={styles.containerImages}>
          <span>Capsulas de Cafe</span>
          <img src={Img1} alt="" />
        </div>
        <div className={styles.containerImages}>
          <span>Cafe en Grano</span>
          <img src={Img2} alt="" />
        </div>
        <div className={styles.containerImages}>
          <span>Cafe Molido</span>
          <img src={Img3} alt="" className={styles.img3} />
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
