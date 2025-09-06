import React, { useState } from "react";
import styles from "./Register.module.css";
import Logo1 from "../../assets/Logos/Logo.png";
import BtnClose from "../BtnClose/BtnClose";

const Register = ({ openRegister, setOpenRegister }) => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BtnClose setOpenRegister={setOpenRegister} openRegister={openRegister} />
        <div className={styles.contentTitle}>
          <img src={Logo1} alt="" />
          <h2>Registrate</h2>
        </div>
        <form action="" onSubmit={handleRegister} className={styles.form}>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="text" placeholder="Email" />
          <input type="pass" placeholder="Contraseña" />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
