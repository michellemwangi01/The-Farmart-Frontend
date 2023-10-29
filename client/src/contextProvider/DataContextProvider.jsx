import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]); //create your state variable
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5555/categories/categories")
      .then((res) => {
        setCategories(res.data);
        setLoadingCategories(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      });
  }, []);

  const data = {
    categories, //add it to the list of data items to be passed to all components
    setCategories,
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataContextProvider;
export { dataContext };
