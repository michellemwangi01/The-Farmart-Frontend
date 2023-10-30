import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]); //create your state variable
  const [products, setProducts] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [localRoutePrefix, setLocalRoutePrefix] = useState(
    "http://127.0.0.1:5555"
  );
  const [hostedRoutePrefix, setHostedRoutePrefix] = useState(
    "https://the-farmart-api-flask.onrender.com"
  );

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
    setProducts,
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
export { dataContext };
