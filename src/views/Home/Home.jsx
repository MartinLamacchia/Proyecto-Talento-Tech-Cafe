import React from "react";
import styles from './Home.module.css'
import Nav from "../../components/Nav/Nav";
import SlideInfo from "../../components/SlideInfo/SlideInfo";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import CategoryProducts from '../../components/CategoryProducts/CategoryProducts'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Nav />
      <SlideInfo />
      <div className={styles.container}>
        <FeaturedProducts />
      </div>
      <div className={styles.container}>
        <CategoryProducts />
      </div>
      <Hero />
      <Footer/>
    </>
  );
};

export default Home;
