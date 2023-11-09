import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import ProductCard from "./ProductCard";
import ProductsSearchFilter from "./ProductsSearchFilter";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const Products = () => {
  // -------------------------------------------- DEFINE STATE  & CONTEXT VARIABLES --------------------------------------------
  const [selectedProductID, setSelectedProductID] = useState(0);
  const [currentProductDetails, setCurrentProductDetails] = useState({});
  const navigate = useNavigate();
  const {
    products,
    productsTitleDisplay,
    currentUser,
    currentUserName,
    localRoutePrefix,
    hostedRoutePrefix,
    setIsAddedToCart,
    isCartVisible,
    setCartVisible,
    isPopupVisible,
    setIsPopupVisible,
  } = useContext(dataContext);

  const [emptyProductsAlert, setEmptyProductsAlert] = useState(
    "Sorry, There are no products for this category at the moment."
  );
  console.log(currentUser);
  // -------------------------------------------- FECTH SELECTED PRODUCT DETAILS  --------------------------------------------

  const togglePopup = (id) => {
    if (Object.keys(currentUser).length === 0) {
      navigate("/login");
    } else {
      setSelectedProductID(id);
      setIsAddedToCart(false);
    }
  };

  // -------------------------------------------- HANDLE PRODUCT DETAILS DISPLAY --------------------------------------------

  useEffect(() => {
    if (selectedProductID) {
      axios
        .get(`${hostedRoutePrefix}/products/products/${selectedProductID}`)
        .then((res) => {
          setCurrentProductDetails(res.data);
          setIsPopupVisible(true);
          console.log("SELECTED PRODUCT DETAILS", res.data);
        })
        .catch((error) => {
          console.error(error);
          setIsPopupVisible(false);
        });
    } else {
      setIsPopupVisible(false);
    }
  }, [selectedProductID]);

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
  // -------------------------------------------- THE INTERFACE --------------------------------------------

  return (
    <div
      // onClick={() => setShowUserMenu(false)}
      className="flex flex-wrap sm:flex-no-wrap justify-center align-center min-w-full mt-6 "
    >
      {isPopupVisible && (
        <ProductDetails
          currentProductDetails={currentProductDetails}
          selectedProductID={selectedProductID}
          togglePopup={togglePopup}
        />
      )}

      <div className="flex grow-1 sm:flex-grow-0 flex-2 ml-6 mb-4 ">
        <ProductsSearchFilter setEmptyProductsAlert={setEmptyProductsAlert} />
      </div>
      <div className="flex grow flex-4 flex-col italic ">
        <h1 className="text-center mg-4 font-light text-4xl mb-4 mg-auto">
          {productsTitleDisplay}
        </h1>
        <section className="articles flex flex-auto ">
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
