import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Vendor from "./Vendor";
import AboutUs from "./Aboutus";
import Error404 from "./Error404";
import Checkout from "./Checkout";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import Signup from "./Signup";
import Login from "./Login";
import LoggedOutNav from "./LoggedOutNav";
import Cart from "./Cart";
import OrderHistory from "./OrderHistory";

const RouterComponent = () => {
  return (
    <div id="routerComponent">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/loggedOutNav" element={<LoggedOutNav />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterComponent;
