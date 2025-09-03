import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>MLDev</h3>
        <div className={styles.containerPolicy}>
          <span>Metodos de Envio</span>
          <span>Preguntas Frecuentes</span>
          <span>Contactenos</span>
          <span>Politica de Privacidad</span>
        </div>
      </div>
      <p>&copy; 2025 RUTA del GRANO. Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;
