import React, { useContext, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import "../styles/ProductCard.css";
import ProductCard from "./ProductCard";
import ProductsSearchFilter from "./ProductsSearchFilter";

const Products = () => {
  const { products } = useContext(dataContext);
  const [emptyProductsAlert, setEmptyProductsAlert] = useState(
    "Sorry, There are no products for this category at the moment."
  );
  // console.log(products);
  // ------------- CREATE DISPLAYS FOR THE DATA
  const productsList = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <div className="flex justify-center align-center min-w-full mt-6 ">
      {/* // <div className="grid grid-cols-2"> */}
      <div className="flex flex-1 ml-6">
        <ProductsSearchFilter setEmptyProductsAlert={setEmptyProductsAlert} />
      </div>
      <section className="articles flex flex-auto justify-start">
        {products.length > 0 ? (
          productsList
        ) : (
          <h1 className="text-2xl text-center mg-auto mt-20 w-100%">
            {emptyProductsAlert}
          </h1>
        )}
      </section>
    </div>
  );
};

export default Products;
