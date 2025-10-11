import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import ProductsStore from "./views/ProductsStore/ProductsStore";
import Contact from "./views/Contact/Contact";
import Cart from "./views/Cart/Cart";
import Nav from "./components/Nav/Nav";

function App() {

  const [productToCart, setProductToCart] = useState([])

  return (
    <>
    <Nav productToCart={productToCart}/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutUs" element={<AboutUs />}/>
      <Route path="/productsStore" element={<ProductsStore setProductToCart={setProductToCart} productToCart={productToCart}/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/cart" element={<Cart setProductToCart={setProductToCart} productToCart={productToCart}/>}/>
    </Routes>
    </>
    
  );
}

export default App;
