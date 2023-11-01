import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  // -------------------- CREATE STATE VARIABLES
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [jwToken, setJWToken] = useState("");
  const [currentUser, setCurrentUser] = useState(0);
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUserCartItems, setCurrentUserCartItems] = useState([]);
  const [currentUserOrderHistory, setCurrentUserOrderHistory] = useState([]);
  const [originalProductList, setOriginalProductList] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [productsTitleDisplay, setProductsTitleDisplay] =
    useState("All Products");
  const localRoutePrefix = "http://127.0.0.1:5555";
  const hostedRoutePrefix = "https://the-farmart-api-flask.onrender.com";
  const Kenya_counties = [
    "Mombasa",
    "Kwale",
    "Kilifi",
    "Tana River",
    "Lamu",
    "Taita/Taveta",
    "Garissa",
    "Wajir",
    "Mandera",
    "Marsabit",
    "Isiolo",
    "Meru",
    "Tharaka-Nithi",
    "Embu",
    "Kitui",
    "Machakos",
    "Makueni",
    "Nyandarua",
    "Nyeri",
    "Kirinyaga",
    "Murang'a",
    "Kiambu",
    "Turkana",
    "West Pokot",
    "Samburu",
    "Trans Nzoia",
    "Uasin Gishu",
    "Elgeyo/Marakwet",
    "Nandi",
    "Baringo",
    "Laikipia",
    "Nakuru",
    "Narok",
    "Kajiado",
    "Kericho",
    "Bomet",
    "Kakamega",
    "Vihiga",
    "Bungoma",
    "Busia",
    "Siaya",
    "Kisumu",
    "Homa Bay",
    "Migori",
    "Kisii",
    "Nyamira",
    "Nairobi City",
  ];
  function capitalizeFirstLetter(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
  // ---------------- FETCHING ALL CATEGORIES

  useEffect(() => {
    axios
      .get(`${hostedRoutePrefix}/categories/categories`)
      .then((res) => {
        console.log("CATEGORIES", res.data);
        setCategories(res.data);
        setLoadingCategories(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      });
  }, []);

  // ---------------- FETCHING ALL PRODUCTS

  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/products/products`)
      .then((res) => {
        setProducts(res.data);
        setOriginalProductList(res.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // ---------------- FETCHING USER CARTITEMS

  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/cartitems/user_cart_items`, {
        headers: {
          Authorization: `Bearer ${jwToken}`,
        },
      })
      .then((res) => {
        setCurrentUserCartItems(res.data);
        console.log("CART ITEMS", res.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, [currentUser]);

  // ---------------- FETCHING USER ORDER HISTORY

  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/orders/user_orders`, {
        headers: {
          Authorization: `Bearer ${jwToken}`,
        },
      })
      .then((res) => {
        setCurrentUserOrderHistory(res.data);
        console.log("ORDER HISTORY", res.data);
      })
      .catch((error) => {
        console.error("Error fetching order history:", error);
      });
  }, [currentUser]);

  // ---------------- FETCHING  VENDOR PRODUCT

  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/products/vendor_products`, {
        headers: {
          Authorization: `Bearer ${jwToken}`,
        },
      })
      .then((res) => {
        setCurrentUserOrderHistory(res.data);
        console.log("VENDOR PRODUCTS", res.data);
      })
      .catch((error) => {
        console.error("Error fetching vendor products:", error);
      });
  }, [currentUser]);

  // ---------------- POPULATE THE DATA CONTEXT

  const data = {
    categories,
    setCategories,
    hostedRoutePrefix,
    localRoutePrefix,
    products,
    originalProductList,
    setProducts,
    productsTitleDisplay,
    setProductsTitleDisplay,
    Kenya_counties,
    currentUserCartItems,
    setCurrentUserCartItems,
    currentUser,
    setCurrentUser,
    currentUserName,
    setCurrentUserName,
    jwToken,
    setJWToken,
    capitalizeFirstLetter,
    setCurrentUserEmail,
    currentUserEmail,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
export { dataContext };
