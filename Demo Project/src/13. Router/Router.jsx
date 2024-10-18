import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services/Services";
import Error404 from "./Error404";
import "./style.css";
import Car from "./Services/Car";
import Bike from "./Services/Bike";
import BikeServices from "./Services/BikeServices";
import Products from "./ProductsProject/Products";
import ProductDetails from "./ProductsProject/ProductDetails";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services">
            {/* Nested route */}
            <Route index element={<Services />} />
            <Route path="car" element={<Car />} />
            <Route path="bike" element={<Bike />} />
            {/* Dynamic Route */}
            <Route path="bike/:bike_name" element={<BikeServices />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
