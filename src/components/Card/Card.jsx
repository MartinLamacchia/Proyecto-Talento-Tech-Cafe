import React, { useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const Card = ({
  name,
  id,
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
  const {productToCart, setProductToCart } = useCartContext()
  const [showBtn, setShowBtn] = useState(false);

  const addProductToCart = () => {
    setShowBtn(true);
    const findProduct = productToCart.find((product) => product.id === id);

    if (findProduct) {
      const updateProduct = productToCart.map((product) => {
        if (product.id === id) {
          console.log(product.amount + 1);
          return { ...product, amount: product.amount + 1 };
        } else {
          return product;
        }
      });
      setProductToCart(updateProduct);
    } else {
      setProductToCart([
        ...productToCart,
        {
          name,
          id,
          description,
          image,
          essences,
          price,
          type,
          weight,
          rate,
          stock,
          views,
          amount: 1,
        },
      ]);
    }

    setShowBtn(false);
  };

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
        {essences.map((essence) => (
          <span
            className={
              essence === "Chocolate"
                ? styles.chocolate
                : essence === "Especias"
                ? styles.spices
                : essence === "Cítricos"
                ? styles.citrusFruits
                : essence === "Frutos Secos"
                ? styles.nuts
                : essence === "Miel"
                ? styles.honney
                : essence === "Floral"
                ? styles.flower
                : essence === "Caramelo"
                ? styles.candy
                : essence === "Frutos Rojos" && styles.redFruits
            }
          >
            {essence}
          </span>
        ))}
        {/* <span className={styles.span2}>{essences[0]}</span>
        <span className={styles.span3}>{essences[1]}</span> */}
      </div>
      <h4>${price}</h4>
      <div className={styles.contentBtn}>
        <button
          className={!showBtn ? styles.btnAdd : styles.btnAddShow}
          onClick={addProductToCart}
        >
          Agregar
        </button>
        <Link to={`/details/${id}`}>
          <button className={styles.btnDetails}>Ver mas</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
