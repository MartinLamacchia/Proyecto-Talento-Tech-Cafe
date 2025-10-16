import React from "react";
import styles from "./Payment.module.css";

const Payment = ({ productToCart, user }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentProducts}>
        <div className={styles.products}>
          <div className={styles.titleProducts}>
            <h4>Imagen</h4>
            <h4>Cantidad</h4>
            <h4>Precio total</h4>
          </div>
          {productToCart.map((product) => (
            <div className={styles.product}>
              <img
                src={product.image[0]}
                alt=""
                className={
                  product.type === "Capsulas" ? styles.imgCasule : styles.img
                }
              />
              <span>{product.amount}</span>
              <span>${product.amount * product.price}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contentPayment}>
        <form action="" className={styles.formPayment} onSubmit={handleSubmit}>
          <div className={styles.contentInput}>
            <input type="text" value={user.name} />
            <input type="text" value={user.email} />
            <input type="text" placeholder="Telefono" />
            <input type="text" placeholder="Direccion" />
            <input type="text" placeholder="Localidad" />
            <input type="text" placeholder="Provincia" />
          </div>
          <div className={styles.contentTotal}>
            <h3>Total a Pagar</h3>
            <span>${productToCart[0].price}</span>
          </div>
          <button className={styles.btnPayment}>Pagar</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
