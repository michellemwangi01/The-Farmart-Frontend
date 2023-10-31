import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  // -------------------- CREATE STATE VARIABLES
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentUserCartItems, setCurrentUserCartItems] = useState([]);
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

  // ---------------- FETCHING CATEGORIES
  useEffect(() => {
    axios
      .get(`${hostedRoutePrefix}/categories/categories`)
      .then((res) => {
        setCategories(res.data);
        setLoadingCategories(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      });
  }, []);

  // ---------------- FETCHING PRODUCTS
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

  // ---------------- FETCHING CARTITEMS
  useEffect(() => {
    axios
      .get(`${localRoutePrefix}/cartitems/cart_items/39`)
      .then((res) => {
        setCurrentUserCartItems(res.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);
  console.log(currentUserCartItems);
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
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
export { dataContext };
