import ProductcardV from "./ProductcardV";
import ProductsSearchFilter from "./ProductsSearchFilter";
import { dataContext } from "../contextProvider/DataContextProvider";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import api from "./AxiosAddJWT";
import { AiOutlinePlus } from "react-icons/ai";

const Vendorproducts = () => {
  const { currentVendorProducts } = useContext(dataContext);

  return (
    <div className="flex  justify-between">
      <div className="basis-1/3 p-10">
        <ProductsSearchFilter style={{ width: "600px" }} />
      </div>

      <div className="  flex flex-wrap basis-3/4 mt-12">
        <div className="w-72 h-72 m-2 bg-gray-200 rounded-xl p-12">
          <h1 className="bg-white w-48 h-48 text-2xl text-green-600 text-center p-8 hover:bg-green-400 hover:text-white">
            <Link to="/newproduct">
              ADD A NEW PRODUCT
              <AiOutlinePlus className="m-auto font-xl mt-2" />
            </Link>
          </h1>
        </div>
        {currentVendorProducts.map((product) => (
          <ProductcardV key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Vendorproducts;
