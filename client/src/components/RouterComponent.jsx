import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Vendor from "./Vendor";
import AboutUs from "./Aboutus";
// import Error404 from "./Error404";

const RouterComponent = () => {
  return (
    <div id="routerComponent">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </div>
  );
};

export default RouterComponent;