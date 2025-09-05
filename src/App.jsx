import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import ProductsStore from "./views/ProductsStore/ProductsStore";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutUs" element={<AboutUs />}/>
      <Route path="/productsStore" element={<ProductsStore />}/>
    </Routes>
  );
}

export default App;
