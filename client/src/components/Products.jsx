import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import "../styles/ProductCard.css";
import ProductCard from "./ProductCard";
import ProductsSearchFilter from "./ProductsSearchFilter";
import ProductDetails from "./ProductDetails";

const Products = () => {
  // -------------------------------------------- DEFINE STATE  & CONTEXT VARIABLES --------------------------------------------
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { products, productsTitleDisplay, currentUser, currentUserName } =
    useContext(dataContext);

  const [emptyProductsAlert, setEmptyProductsAlert] = useState(
    "Sorry, There are no products for this category at the moment."
  );

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    setIsPopupVisible(false);
  }, []);

  // -------------------------------------------- CREATE INTERFACE FOR THE DATA --------------------------------------------

  const productsList = products.map((product) => {
    return (
      <ProductCard
        togglePopup={togglePopup}
        isPopupVisible={isPopupVisible}
        setIsPopupVisible={setIsPopupVisible}
        key={product.id}
        product={product}
      />
    );
  });
  console.log(isPopupVisible);
  // -------------------------------------------- THE INTERFACE --------------------------------------------

  return (
    <div className="flex flex-wrap sm:flex-no-wrap justify-center align-center min-w-full mt-6 ">
      {isPopupVisible && <ProductDetails togglePopup={togglePopup} />}

      <div className="flex grow-1 sm:flex-grow-0 flex-2 ml-6 mb-4 ">
        <ProductsSearchFilter setEmptyProductsAlert={setEmptyProductsAlert} />
      </div>
      <div className="flex grow flex-4 flex-col italic ">
        <h1 className="text-center mg-4 font-light text-4xl mb-4 mg-auto">
          {productsTitleDisplay}
        </h1>
        <section className="articles flex flex-auto justify-center">
          {products.length > 0 ? (
            productsList
          ) : (
            <div className=" flex  justify-center">
              <h1 className="text-2xl text-center  mt-20 ">
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
