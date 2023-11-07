import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Vendor from "./Vendor";
import AboutUs from "./Aboutus";
import Vendorshop from "./VendorShop";
import Error404 from "./Error404";
import Checkout from "./Checkout";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import Signup from "./Signup";
import Login from "./Login";
import LoggedOutNav from "./LoggedOutNav";
import Cart from "./Cart";
import OrderHistory from "./OrderHistory";
import OrderDetails from "./OrderDetails";
import VendorPortal from "./VendorDashboard";
import VendorAllOrders from "./VendorAllOrders";
import VendorNewOrders from "./VendorNewOrders";
import Vendorproducts from "./Vendorproducts";
import ShowProduct from "./ShowProduct"
import NewProduct from "./NewProduct"
import EditProduct from "./ProductEdit";
const RouterComponent = () => {
  const[productsShow,setProductsShow]=useState([])
  return (
    <div id="routerComponent">
      <Routes>
        <Route exact path="/" element={<Home setProductsShow={setProductsShow}/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Vendorshop />} />
        <Route path="Login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/newproduct" element={<NewProduct/>}/>
        <Route path="showProduct" element={<ShowProduct productsShow={productsShow}/>}/>
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/loggedOutNav" element={<LoggedOutNav />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/vendorhome" element={<VendorPortal />}>
          <Route index element={<VendorNewOrders />} />
          <Route path="vendorneworders" element={<VendorNewOrders />} />
          <Route path="vendorproducts" element={<Vendorproducts />} />
          <Route path="allorders" element={<VendorAllOrders />} />
        </Route>
        <Route path="/product/edit/:id" element={<EditProduct/>}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterComponent;
