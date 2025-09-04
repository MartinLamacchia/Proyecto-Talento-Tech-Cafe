import React, { useEffect, useState } from "react";
import styles from "./SlideInfo.module.css";

let paragraphSlider = [
  {
    first: "Consigue un 20% de descuento en compras superiores a $50.000",
    second: "un 15% superiores a $30.000 o 10% superiores a $20.000",
  },
  {
    first: "Envios 24/48hs",
    second: "Clientes VIP, tus envios en 24/48hs. Unite y obtene mas info.",
  },
  {
    first: "Devoluciones",
    second:
      "Clientes VIP, tiene 30 dias para hacer la devolucion. Unite y obtene mas info.",
  },
  {
    first: "Promociones",
    second:
      "Clientes VIP, hasta 50% de descuento en productos seleccionados. Unite y obtene mas info.",
  },
];

const SlideInfo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % paragraphSlider.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.container}>
      <p className={styles.firstParagraph}>{paragraphSlider[index].first}</p>
      <p className={styles.secondParagraph}>{paragraphSlider[index].second}</p>
    </div>
  );
};

export default SlideInfo;
