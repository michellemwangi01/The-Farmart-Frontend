import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  // -------------------- CREATE STATE VARIABLES
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [originalProductList, setOriginalProductList] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [productsTitleDisplay, setProductsTitleDisplay] =
    useState("All Products");
  const localRoutePrefix = "http://127.0.0.1:5555";
  const hostedRoutePrefix = "https://the-farmart-api-flask.onrender.com";

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
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
export { dataContext };
