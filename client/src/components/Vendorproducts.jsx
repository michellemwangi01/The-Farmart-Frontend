import React, { useContext, useEffect, useState } from "react";
import api from "./AxiosAddJWT";
import { dataContext } from "../contextProvider/DataContextProvider";

const Vendorproducts = () => {
  const [vendorProducts, setVendorProducts] = useState([]);
  const { localRoutePrefix } = useContext(dataContext);

  useEffect(() => {
    const fetchVendorProducts = async () => {
      try {
        const response = await api.get(
          `${localRoutePrefix}/products/vendor_products`
        );
        setVendorProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVendorProducts();
  }, []);
  return (
    <div>
      <h1>Vendor Products</h1>
      <ul>
        {vendorProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Vendorproducts;
