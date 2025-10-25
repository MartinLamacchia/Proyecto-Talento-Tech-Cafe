import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logos/Logo 1.png";
import Logo1 from "../../assets/Logos/Logo.png";
import Logo2 from "../../assets/Logos/Sin título.png";
import LogoDark from "../../assets/Logos/LogoDark2.png";
import Logo2Dark from "../../assets/Logos/LogoDark3.png";
import styles from "./Nav.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {useCartContext} from "../../Context/CartContext"

const Nav = ({isAutenticate, setIsAutenticate, openLogin, setOpenLogin, user, setUser}) => {
  const {productToCart} = useCartContext()
  const [themePage, setThemePage] = useState("light");
  const [openRegister, setOpenRegister] = useState(false);

  const allAmountProducts = productToCart.reduce((total, product) => {
    return total + product.amount
    }, 0)

  const chooseTheme = () => {
    if (themePage === "light") {
      setThemePage("dark");
    } else {
      setThemePage("light");
    }
  };

  const handleOpenToLogin = () => {
    setOpenLogin(true);
  };

  return (
    <div
      className={
        themePage === "light" ? styles.container : styles.containerDark
      }
    >
      <Link to="/">
        <div className={styles.containerLogo}>
          <img src={Logo1} alt="" className={styles.imgNavLogo1} />
          <div className={styles.containerTextLogo}>
            {themePage === "light" ? (
              <>
                <img src={Logo} alt="" className={styles.imgNavLogo} />
                <img src={Logo2} alt="" className={styles.imgNavLogo2} />
              </>
            ) : (
              <>
                <img src={LogoDark} alt="" className={styles.imgNavLogo} />
                <img src={Logo2Dark} alt="" className={styles.imgNavLogo2} />
              </>
            )}
          </div>
        </div>
      </Link>

      <div className={styles.containerList}>
        <ul>
          <li>
            <Link to="/aboutUs">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/productsStore">Tienda</Link>
          </li>
          <li>
            <Link to="/contact">Contactenos</Link>
          </li>
        </ul>
      </div>
      <div className={styles.containerIcons}>
        <Link to="/cart" className={styles.link}>
          <FiShoppingCart className={styles.icon} />
          {
            allAmountProducts > 0 && (
              <span className={allAmountProducts > 9 && styles.spanAmountCart}>{allAmountProducts}</span>
            )
          }
        </Link>
        <FaRegHeart className={styles.icon} />
        <FaRegUser className={styles.icon} onClick={handleOpenToLogin} />
        {themePage === "light" ? (
          <FaRegMoon className={styles.icon} onClick={chooseTheme} />
        ) : (
          <MdOutlineWbSunny className={styles.icon} onClick={chooseTheme} />
        )}
      </div>

      {openLogin && (
        <Login
          setOpenLogin={setOpenLogin}
          openLogin={openLogin}
          openRegister={openRegister}
          setOpenRegister={setOpenRegister}
          setIsAutenticate={setIsAutenticate}
          setUser={setUser}
          user={user}
        />
      )}

      {openRegister && (
        <Register
          openRegister={openRegister}
          setOpenRegister={setOpenRegister}
        />
      )}
    </div>
  );
};

export default Nav;
