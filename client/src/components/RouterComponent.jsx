import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Vendor from "./Vendor";
import Vendorshop from "./VendorShop";
import Error404 from "./Error404";
import Checkout from "./Checkout";
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
import UserProfile from "./UserProfile";
import ShowProduct from "./ShowProduct";
import NewProduct from "./NewProduct";
import EditProduct from "./ProductEdit";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./Navbar";
import { dataContext } from "../contextProvider/DataContextProvider";

const RouterComponent = () => {
  const [productsShow, setProductsShow] = useState([]);
  const { isAuthenticated, setIsAuthenticated, isLoggedIn } =
    useContext(dataContext);

  return (
    <div id="routerComponent">
      <Routes>
        {/* -------------------- N O T   P R O T E C T E D --------------------*/}

        <Route path="/" element={<Home setProductsShow={setProductsShow} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/navbar"
          element={
            <Navbar
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />

        {/* ---------------------- P R O T E C T E D ----------------------*/}
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Vendorshop />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/showproduct" element={<ShowProduct />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />

        {/* <Route
          path="/vendorhome"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <VendorPortal />
            </ProtectedRoute>
          }
        /> */}

        {/* <Route
          path="/vendor"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <Vendor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <Vendorshop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orderhistory"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <OrderHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newproduct"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <NewProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/showproduct"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <ShowProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/productdetails"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orderdetails"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <OrderDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/edit/:id"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            >
              <EditProduct />
            </ProtectedRoute>
          }
        /> */}

        {/* <Route
          path="/vendorhome"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <VendorPortal />
            </ProtectedRoute>
          }
        /> */}

        <Route path="/vendorhome" element={<VendorPortal />}>
          <Route index element={<VendorNewOrders />} />
          <Route path="vendorneworders" element={<VendorNewOrders />} />
          <Route path="vendorproducts" element={<Vendorproducts />} />
          <Route path="allorders" element={<VendorAllOrders />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterComponent;
