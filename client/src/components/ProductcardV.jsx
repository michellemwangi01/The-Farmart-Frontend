import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../contextProvider/DataContextProvider";

const ProductcardV = ({ product }) => {
  const { capitalizeFirstLetter } = useContext(dataContext);
  const name = product.name;
  const productName = capitalizeFirstLetter(name);

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

        <Link
          className="bg-green-600  text-white rounded-lg py-1 px-2 hover:text-white hover:bg-green-400 m-4"
          to={`/product/edit/${product.id}`}
        >
          EDIT
        </Link>
      </div>
    </div>
  );
};

export default ProductcardV;
