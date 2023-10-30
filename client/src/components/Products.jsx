import React, { useContext, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import "../styles/ProductCard.css";
import ProductCard from "./ProductCard";
import ProductsSearchFilter from "./ProductsSearchFilter";

const Products = () => {
  // ---------------- DEFINE STATE  & CONTEXT VARIABLES
  const { products, productsTitleDisplay } = useContext(dataContext);
  const [emptyProductsAlert, setEmptyProductsAlert] = useState(
    "Sorry, There are no products for this category at the moment."
  );

  // ------------- CREATE DISPLAYS FOR THE DATA
  const productsList = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  // ---------------- THE GUI
  return (
    <div className="flex justify-center align-center min-w-full mt-6 ">
      <div className="flex grow-0 flex-2 ml-6">
        <ProductsSearchFilter setEmptyProductsAlert={setEmptyProductsAlert} />
      </div>
      <div className="flex grow flex-4 flex-col italic ">
        <h1 className="text-center mg-4 font-light text-4xl mb-4 mg-auto">
          {productsTitleDisplay}
        </h1>
        <section className="articles flex flex-auto justify-start">
          {products.length > 0 ? (
            productsList
          ) : (
            <div className="w-full">
              <h1 className="text-2xl text-center  mt-20 w-100%">
                {emptyProductsAlert}
              </h1>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
