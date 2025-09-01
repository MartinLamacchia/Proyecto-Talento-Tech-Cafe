import React from "react";
import styles from './Home.module.css'
import Nav from "../../components/Nav/Nav";
import SlideInfo from "../../components/SlideInfo/SlideInfo";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Nav />
      <SlideInfo />
      <div className={styles.containerFeaturedProducts}>
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Home;
