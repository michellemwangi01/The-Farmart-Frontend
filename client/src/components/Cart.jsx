import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import EmptyCart from "../animations/EmptyCart2.json";
import AddtoCart from "../animations/AddtoCart.json";

import Lottie from "lottie-react";
const Cart = () => {
  const [cartItemQuantities, setCartItemQuantities] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // -------------------------------------------- GET REQUIRED DATA --------------------------------------------
  const {
    currentUserCartItems,
    deleteFromOrder,
    orderTotalAmount,
    setOrderTotalAmount,
  } = useContext(dataContext);

  const navigate = useNavigate();

  // -------------------------------------------- DELETE FROM CART ----------------------------------------

  const deleteFromCartHandler = (id) => {
    deleteFromOrder(id);
  };

  // -------------------------------------------- CALCULATE TOTAL AMOUNT ----------------------------------------

  const handleQuantityChange = (cartId, quantity) => {
    console.log(cartId, quantity);
    setCartItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cartId]: quantity,
    }));
  };
  console.log(cartItemQuantities);
  // -------------------------------------------- CALCULATE TOTAL AMOUNT ----------------------------------------

  const handleCheckout = () => {
    // navigate("/checkout");
    console.log(cartItemQuantities);
  };

  // -------------------------------------------- CREATE CART ITEMS --------------------------------------------

  const cartItemsList = currentUserCartItems.map((cartItem) => (
    <li
      key={cartItem.id}
      className="flex flex-col py-6 pr-4 sm:flex-row sm:justify-between px-4 my-2 border border-1 border-green-700 border-b"
    >
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={cartItem.product.image}
          alt={`${cartItem.product.name} image`}
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-medium font-serif leadi sm:pr-8">
                {cartItem.product.name.toUpperCase()}
              </h3>
              <p className="text-sm dark:text-gray-400 font-serif">
                {cartItem.product.category.name}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">
                KES{" "}
                {`${cartItem.product.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}`}
              </p>
              <p className="text-sm  dark:text-gray-600">
                KES{" "}
                {`${cartItem.product.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}`}
              </p>
            </div>
          </div>
          {/* sm:w-auto */}
          <div className="flex justify-between text-sm items-center">
            <div className="flex flex-wrap sm:flex-nowrap mb-2">
              <button
                onClick={() => deleteFromCartHandler(cartItem.id)}
                type="button"
                className="flex items-center px-2 py-1 pl-0 space-x-1 hover:bg-green-700 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current text-green-700 hover:text-white"
                >
                  <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                  <rect width="32" height="200" x="168" y="216"></rect>
                  <rect width="32" height="200" x="240" y="216"></rect>
                  <rect width="32" height="200" x="312" y="216"></rect>
                  <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                </svg>
                <span className="text-green-700 hover:text-white ">Remove</span>
              </button>
              <button
                type="button"
                className="flex items-center px-2 py-1 space-x-1 hover:bg-green-700 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current text-green-700 hover:text-white"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
                <span className="text-green-700 hover:text-white">
                  Add to favorites
                </span>
              </button>
            </div>
            <div className="flex items-center">
              <label className="mr-3 mb-2">Quantity</label>
              <input
                onSubmit={(e) =>
                  handleQuantityChange(cartItem.id, e.target.value)
                }
                type="number"
                min="1"
                value={(e) => e.target.value}
                className="w-16 h-8 text-black font-serif text-center text-lg bg-transparent border-b-2 rounded"
                step="1"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  ));

  // -------------------------------------------- THE INTERFACE--------------------------------------------

  return (
    <div className="static ">
      <div className="absolute max-h-5/6 overflow-y-scroll mb-4 bg-white top-32 right-0 flex border border-1 border-green-700 flex-col lg:w-1/3 w-full  p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-center w-full">
          {currentUserCartItems.length === 0 ? (
            <Lottie className="w-2/4" animationData={EmptyCart} />
          ) : (
            <Lottie className="w-2/4" animationData={AddtoCart} />
          )}
        </div>
        <h2 className="text-4xl  font-serif font-semibold text-center ">
          YOUR CART
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartItemsList}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">
              {" "}
              KES{" "}
              {`${orderTotalAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}`}
            </span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border-solid border-1 border-green-700 rounded-md bg-green-700 
            hover:bg-white hover:text-green-700 dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            Clear Cart
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            onClick={handleCheckout}
            type="submit"
            className="px-6 py-2 border-solid border-1 border-green-700 rounded-md bg-green-700 
            hover:bg-white hover:text-green-700 dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only bg-green-700">
              Continue to
            </span>
            Checkout
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Cart;
