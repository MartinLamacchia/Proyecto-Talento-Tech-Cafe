import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./AboutUs.module.css";
import Nav from "../../components/Nav/Nav";
import ImgAbout1 from "../../assets/AboutUs1.png";
import ImgAbout2 from "../../assets/AboutUs2.png";
import ImgAbout3 from "../../assets/AboutUs3.png";

let descriptionAboutUs = [
  {
    id: 1,
    image: ImgAbout1,
    paragraph:
      "En 1955, un pequeño grupo de apasionados por el café comenzó un viaje que cambiaría la manera de disfrutar esta bebida. Lo que nació como una pequeña tostaduría familiar se convirtió en el inicio de nuestra Ruta del Grano, un recorrido marcado por la dedicación, el respeto por la tierra y la búsqueda constante de calidad. Con el paso de los años, crecimos junto a las historias de cada cosecha, aprendiendo de productores locales y viajando a las regiones cafetaleras más reconocidas del mundo. Así descubrimos que el café no es solo un grano: es cultura, tradición y encuentro. En cada sorbo encontrarás no solo energía y aroma, sino también la historia de quienes han hecho posible que este grano llegue hasta vos. Porque en Ruta del Grano, más que vender café, compartimos un viaje que comenzó en 1955 y sigue escribiéndose cada día.",
  },
  {
    id: 2,
    image: ImgAbout2,
    paragraph:
      "En Ruta del Grano creemos que cada persona vive el café de una manera única, por eso ofrecemos una variedad pensada para acompañar cada momento. Nuestros granos seleccionados, provenientes de las mejores cosechas del mundo, conservan toda la pureza y fuerza de su origen. Para quienes disfrutan del ritual más auténtico, contamos con café en grano listo para moler al instante; para los que buscan practicidad sin perder calidad, ofrecemos cápsulas compatibles con los principales sistemas; y para quienes prefieren la tradición, brindamos café molido con el punto justo para liberar todo su aroma. Cada presentación guarda el mismo cuidado y compromiso: asegurar que cada taza de Ruta del Grano sea una experiencia que despierte sentidos, transporte a nuevas culturas y confirme nuestro lema: “Sabores que recorren el mundo.”",
  },
  {
    id: 3,
    image: ImgAbout3,
    paragraph:
      "En Ruta del Grano entendemos que la excelencia no es casualidad, sino el resultado de un trabajo cuidadoso en cada etapa. Desde la selección de los granos en origen hasta el envasado final, controlamos cada detalle para garantizar frescura, aroma y calidad superior. Colaboramos directamente con caficultores que comparten nuestros valores, fomentando prácticas responsables que respetan la tierra y a quienes la trabajan. Una vez en nuestras manos, los granos son tostados con precisión para resaltar sus notas únicas y mantener intacto su carácter. Finalmente, los envasamos con tecnologías que preservan sus cualidades, asegurando que al llegar a vos, cada taza conserve la esencia de su viaje. Porque en Ruta del Grano no solo vendemos café: lo cuidamos como un legado, para que siempre disfrutes el mejor sabor posible.",
  },
];

const AboutUs = () => {
  const [imgId, setImgId] = useState("");

  const handleMouseEnter = (e) => {
    setImgId(Number(e.target.id));
  };

  const handleMouseLeave = () => {
    setImgId("");
  };

  console.log(imgId);

  return (
    <>
      <Nav />
      <div className={styles.container}>
        {descriptionAboutUs.map((description) => (
          <div className={styles.content} onMouseLeave={handleMouseLeave}>
            <AnimatePresence initial={false}>
              {imgId === "" || imgId === description.id ? (
                <motion.img
                  key={description.id}
                  src={description.image}
                  alt=""
                  id={description.id}
                  onMouseEnter={handleMouseEnter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imgId === "" || imgId === description.id ? 1 : 0  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className={styles.image}
                />
              ) : null}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {imgId === description.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6 }}
                  className={
                    imgId === 1
                      ? styles.containerParagraph1
                      : imgId === 2
                      ? styles.containerParagraph2
                      : styles.containerParagraph3
                  }
                >
                  <p>{description.paragraph}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
