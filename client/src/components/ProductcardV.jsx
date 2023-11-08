import React from "react";
import { Link } from "react-router-dom";

const ProductcardV = ({ product }) => {
  return (
    <div className="w-72 h-72 m-2 bg-gray-200 rounded-xl pt-4 px-5 font-serif">
      <img
        className="w-60 h-52 rounded-lg "
        src={product.image}
        alt="product"
      />
      <div className="flex justify-between">
        <div>
          <h1 className="font-medium text-left">{product.name}</h1>
          <p className="font-light">Ksh.{product.price}</p>
        </div>

        <Link
          className="text-green-600 p-1 hover:text-green-500 m-4"
          to={`/product/edit/${product.id}`}
        >
          EDIT
        </Link>
      </div>
    </div>
  );
};

export default ProductcardV;
