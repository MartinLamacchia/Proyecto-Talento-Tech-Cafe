import "./App.css";
import React, { useState } from "react";
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
  const [productToCart, setProductToCart] = useState([]);
  const [isAutenticate, setIsAutenticate] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [user, setUser] = useState({
    name: "Martin",
    email: "",
    password: "",
  });

  return (
    <>
      <Nav
        productToCart={productToCart}
        setIsAutenticate={setIsAutenticate}
        isAutenticate={isAutenticate}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route
          path="/productsStore"
          element={
            <ProductsStore
              setProductToCart={setProductToCart}
              productToCart={productToCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart
              setProductToCart={setProductToCart}
              productToCart={productToCart}
              isAutenticate={isAutenticate}
              setOpenLogin={setOpenLogin}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <Payment
              isAutenticate={isAutenticate}
              productToCart={productToCart}
              user={user}
            />
          }
        />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
