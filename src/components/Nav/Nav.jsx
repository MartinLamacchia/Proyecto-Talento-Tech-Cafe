import React from "react";
import Logo from "../../assets/Logos/Logo 1.png";
import Logo1 from "../../assets/Logos/Logo.png";
import Logo2 from "../../assets/Logos/Sin título.png";
import styles from "./Nav.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <img src={Logo1} alt="" className={styles.imgNavLogo1} />
        <div className={styles.containerTextLogo}>
          <img src={Logo} alt="" className={styles.imgNavLogo} />
          <img src={Logo2} alt="" className={styles.imgNavLogo2} />
        </div>
      </div>
      <div className={styles.containerList}>
        <ul>
          <li>Sobre Nosotros</li>
          <li>Tienda</li>
        </ul>
      </div>
      <div className={styles.containerIcons}>
        <FiShoppingCart />
        <FaRegHeart />
        <FaRegUser />
        <MdOutlineWbSunny />
      </div>
    </div>
  );
};

export default Nav;
