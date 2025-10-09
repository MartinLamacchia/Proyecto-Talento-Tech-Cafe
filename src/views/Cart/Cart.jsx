import React from "react";
import styles from "./Cart.module.css";
import Nav from "../../components/Nav/Nav";
import Footer from '../../components/Footer/Footer'

const Cart = ({ productToCart }) => {

  const priceTotal = productToCart.reduce((valueBefore, product)=> {
    return valueBefore + (product.price * product.amount)
  }, 0)

  return (
    <>
      <Nav />
      <h2>Carrito de compras</h2>
      
        <div className={styles.container}>
          <div className={styles.containerListProducts}>
            <div className={styles.conainerList}>
              <h4>Imagen</h4>
              <h4>Nombre</h4>
              <h4>Descripcion</h4>
              <h4>Cantidad</h4>
              <h4>Precio</h4>
            </div>
            {
              productToCart.length < 1 ? (
                <div className={styles.conainerCartEmpty}>
                  <p>No hay productos agregados al carrito</p>
                </div>
              ) : (
                productToCart.map((product) => (
                  <div className={styles.conainerProducts}>
                    <img src={product.image[0]} alt="" />
                    <h4>{product?.name}</h4>
                    <p>{product.description}</p>
                    <h4>{product.amount}</h4>
                    <h4>${product.price * product.amount}</h4>
                  </div>
                  ))
              )
            }
            
          </div>
        </div>
        <h3>Total: ${priceTotal}</h3>
        <Footer/>
    </>
  );
};

export default Cart;
