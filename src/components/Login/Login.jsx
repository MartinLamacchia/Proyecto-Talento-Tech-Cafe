import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Login.module.css";
import { FaArrowRight } from "react-icons/fa";
import Logo1 from "../../assets/Logos/Logo.png";
import BtnClose from "../BtnClose/BtnClose";

const Login = ({ setOpenLogin, openLogin, setOpenRegister, openRegister }) => {
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

  const handleOpenRegister = () => {
    setOpenLogin(false)
    setOpenRegister(true)
  }

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
          onClick={handleOpenRegister}
        >
           <AnimatePresence mode="wait">
            {showRegister ? (
              <motion.span
                key="register"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                Registrate
              </motion.span>
            ) : (
              <motion.span
                key="login"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                No tienes cuenta aun
              </motion.span>
            )}
          </AnimatePresence>
          <FaArrowRight className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};

export default Login;
