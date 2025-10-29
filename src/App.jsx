import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import ProductsStore from "./views/ProductsStore/ProductsStore";
import Contact from "./views/Contact/Contact";
import Cart from "./views/Cart/Cart";
import Nav from "./components/Nav/Nav";
import Payment from "./views/Payment/Payment";
import Details from "./views/Details/Details";

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/productsStore" element={<ProductsStore />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart/>
          }
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
