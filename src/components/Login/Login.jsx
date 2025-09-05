import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaArrowRight } from "react-icons/fa";
import Logo1 from "../../assets/Logos/Logo.png";
import BtnClose from "../BtnClose/BtnClose";

const Login = ({ setOpenLogin, openLogin }) => {
  const [showRegister, setShowRegister] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleMouseEnter = () => {
    setShowRegister(true);
  };

  const handleMouseLeave = () => {
    setShowRegister(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BtnClose setOpenLogin={setOpenLogin} openLogin={openLogin} />
        <div className={styles.contentTitle}>
          <img src={Logo1} alt="" />
          <h2>Iniciar Sesion</h2>
        </div>
        <form action="" onSubmit={handleLogin} className={styles.form}>
          <input type="text" placeholder="Email" />
          <input type="pass" placeholder="Contraseña" />
          <button>Ingresar</button>
        </form>
        <div
          className={showRegister ? styles.contentShowRegister : styles.contentRegister}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showRegister ? (
            <span>Registrate</span>
          ) : (
            <span>No tienes cuenta aun</span>
          )}
          <FaArrowRight className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};

export default Login;
