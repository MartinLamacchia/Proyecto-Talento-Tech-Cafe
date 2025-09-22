import React from "react";
import styles from "./Card.module.css";

const Card = ({
  name,
  description,
  image,
  essences,
  price,
  type,
  weight,
  rate,
  stock,
  views,
}) => {
  return (
    <div className={styles.containerCoffee}>
      <img
        src={image[0]}
        alt=""
        className={type === "Capsulas" ? styles.imgCapsule : ""}
      />
      <div
        className={
          type === "Capsulas"
            ? styles.containerSpanCapsule
            : styles.containerSpan
        }
      >
        <span className={styles.span1}>{name}</span>
        <span className={styles.span2}>{essences[0]}</span>
        <span className={styles.span3}>{essences[1]}</span>
      </div>
      <h4>${price}</h4>
    </div>
  );
};

export default Card;
