import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../contextProvider/DataContextProvider";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ProductcardV = ({ product }) => {
  const {
    capitalizeFirstLetter,
    localRoutePrefix,
    hostedRoutePrefix,
    currentVendorProducts,
    setCurrentVendorProducts,
  } = useContext(dataContext);
  const name = product.name;
  const productName = capitalizeFirstLetter(name);

  // -------------------TOAST NOIFICATIONS

  const productSuccessfullyDeleted = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  const deleteProductHandler = () => {
    axios
      .delete(`${hostedRoutePrefix}/products/products/${product.id}`)
      .then((res) => {
        console.log(res);
        productSuccessfullyDeleted(
          `Product #${product.id} was successfully deleted.`,
          "success"
        );
        const remainingProducts = currentVendorProducts.filter(
          (productItem) => productItem.id !== product.id
        );
        setCurrentVendorProducts(remainingProducts);
      });
  };

  return (
    <div className="w-72 h-72 m-2 text-sm bg-gray-200 rounded-xl pt-4 px-5 font-serif">
      <img
        className="w-60 h-52 rounded-lg object-cover"
        src={product.image}
        alt="product"
      />
      <div className="flex justify-between pt-2">
        <div className="">
          <p className="font-light">Product #{product.id}</p>

          <h1 className="font-medium text-lg text-green-800 text-left">
            {productName}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <Link
            className="bg-green-600  text-white rounded-lg py-1 px-2 hover:text-white hover:bg-green-400 m-4"
            to={`/product/edit/${product.id}`}
          >
            EDIT
          </Link>
          <BsFillTrashFill
            onClick={deleteProductHandler}
            className="text-xl text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductcardV;
