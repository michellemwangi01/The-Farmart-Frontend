import React, { useContext } from "react";
import ProductcardV from "./ProductcardV";
import ProductsSearchFilter from "./ProductsSearchFilter";
import { dataContext } from "../contextProvider/DataContextProvider";
import { Link } from "react-router-dom";

const Vendorshop = () => {
  const {
    currentVendorProducts,
    products,
    productsTitleDisplay,
    currentUser,
    currentUserName,
  } = useContext(dataContext);

  return (
    <div>
      <div className="flex  justify-between">
        <div className="basis-1/3 p-10">
          <ProductsSearchFilter style={{ width: "600px" }} />
        </div>

        <div className="  flex flex-wrap basis-3/4 mt-12">
          <div className="w-72 h-72 m-2 bg-gray-200 rounded-xl p-12">
            <h1 className="bg-white w-48 h-48 text-2xl text-green-600 text-center p-8 hover:bg-green-400 hover:text-green-700">
              <Link to="/newproduct">
                ADD PRODUCT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#0b8609"
                  className="w-14 h-14 ml-9"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </h1>
          </div>
          {currentVendorProducts.map((product) => (
            <ProductcardV
              key={product.id}
              product={product}
              currentVendorProducts={currentVendorProducts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendorshop;
