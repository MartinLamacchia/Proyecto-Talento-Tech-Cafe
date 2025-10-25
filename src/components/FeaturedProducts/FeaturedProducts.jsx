import React from "react";
import styles from "./FeaturedProducts.module.css";
import { useCartContext } from "../../Context/CartContext";

const FeaturedProducts = () => {
  const {products} = useCartContext()
  const coffeesRate = products.sort((a, b) => b.rate - a.rate);
  

  return (
    <div className={styles.container}>
      <h2>Productos Destacados</h2>
      <div className={styles.containerProducts}>
        {coffeesRate.map(
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
