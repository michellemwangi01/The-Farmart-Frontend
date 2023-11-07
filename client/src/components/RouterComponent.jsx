import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Vendor from "./Vendor";
import AboutUs from "./Aboutus";
import Vendorshop from "./VendorShop";
import Error404 from "./Error404";
import Signup from "./Signup";
import Login from "./Login";
import Checkout from "./Checkout";
import NewProduct from "./NewProduct";
import ShowProduct from "./ShowProduct";

const RouterComponent = () => {
  const[productsShow,setProductsShow]=useState([])
  return (
    <div id="routerComponent">
      <Routes>
        <Route exact path="/" element={<Home setProductsShow={setProductsShow}/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Vendorshop />} />
        <Route path="Login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/newproduct" element={<NewProduct/>}/>
        <Route path="showProduct" element={<ShowProduct productsShow={productsShow}/>}/>
      </Routes>
    </div>
  );
};

export default RouterComponent;
