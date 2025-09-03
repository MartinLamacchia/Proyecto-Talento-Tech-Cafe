import React from "react";
import styles from './Hero.module.css'
import Img4 from '../../assets/concept-bannermany-coffee-beans-laid-260nw-1741872143.jpg'

const Hero = () => {
  return (
    <div className={styles.container}>
      <h4>Cafes Distinguidos</h4>
      <p>Sabores que recorren el mundo</p>
      <img src={Img4} alt="" />
    </div>
  );
};

export default Hero;
