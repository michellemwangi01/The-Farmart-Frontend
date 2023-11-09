import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { dataContext } from "../contextProvider/DataContextProvider";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import EmptyCart from "../animations/EmptyCart2.json";
import AddtoCart from "../animations/AddtoCart.json";
import { AiOutlineCloseSquare } from "react-icons/ai";
// import api from "./AxiosAddJWT";

import Lottie from "lottie-react";
const Cart = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // -------------------------------------------- GET REQUIRED DATA --------------------------------------------
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    api,
    jwToken,
    isCartVisible,
    setCartVisible,
    currentUser,
    localRoutePrefix,
    hostedRoutePrefix,
    currentUserCartItems,
    setCurrentUserCartItems,
    deleteFromOrder,
    orderTotalAmount,
    setOrderTotalAmount,
    cartItemQuantities,
    setCartItemQuantities,
    headers,
    setIsNewOrder,
    isNewOrder,
    isAddedToCart,
  } = useContext(dataContext);

  const navigate = useNavigate();

  // ---------------- FETCHING USER CARTITEMS

  useEffect(() => {
    console.log(currentUser, headers, localStorage.getItem("access_token"));
    if (currentUser.user_id !== 0) {
      api
        .get(`${hostedRoutePrefix}/cartitems/user_cart_items`, { headers })
        .then((res) => {
          setCurrentUserCartItems(res.data);
          console.log("CART ITEMS", res.data);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
        });
    }
  }, [currentUser, isAddedToCart, isNewOrder]);

  // -------------------------------------------- DELETE FROM CART ----------------------------------------

  const deleteFromCartHandler = (id) => {
    deleteFromOrder(id);
  };

  useEffect(() => {
    const checkIfItemsInCart = () => {
      if (currentUserCartItems.length === 0) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    };
    checkIfItemsInCart();
  }, [currentUserCartItems]);

  // -------------------------------------------- UPDATE QUANTITIY VALUES FOR CART ITEMS----------------------------------------

  // Load the initial quantities from the database
  useEffect(() => {
    const initialQuantities = {};
    currentUserCartItems.forEach((cartItem) => {
      initialQuantities[cartItem.id] = cartItem.quantity;
    });
    setCartItemQuantities(initialQuantities);
  }, [currentUserCartItems]);

  //Increment initial quantities
  const increaseItemQuantity = (cartId) => {
    setCartItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cartId]: (prevQuantities[cartId] || 1) + 1,
    }));
  };

  //Decrement initial quantities
  const decreaseItemQuantity = (cartId) => {
    setCartItemQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[cartId] || 1;
      if (currentQuantity > 1) {
        return {
          ...prevQuantities,
          [cartId]: currentQuantity - 1,
        };
      }
      return prevQuantities;
    });
  };

  // -------------------------------------------- UPDATE CARTITEM QUANTITIES ON CHECKOUT ----------------------------------------

  const handleCheckout = () => {
    setCartVisible(false);
    console.log(cartItemQuantities);
    for (const id in cartItemQuantities) {
      console.log(id);
      axios
        .patch(`${hostedRoutePrefix}/cartitems/cart_items/${id}`, {
          quantity: cartItemQuantities[id],
          amount: cartItemQuantities[id],
        })
        .then((response) => {
          console.log("Quantity updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating quantity:", error);
        });
    }
    navigate("/checkout");
  };

  // -------------------------------------------- DELETE CART ITEM AMOUNT ----------------------------------------

  const clearCartHandler = () => {
    console.log(currentUser.user_id);
    axios
      .delete(`${hostedRoutePrefix}/cartitems/clear_cart_items`, { headers })
      .then((res) => {
        setIsNewOrder(!isNewOrder);
        setCurrentUserCartItems([]);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  // -------------------------------------------- CREATE CART ITEMS --------------------------------------------

  const cartItemsList = currentUserCartItems.map((cartItem) => {
    const totalAmountPercartItem =
      cartItem.product.price * cartItemQuantities[cartItem.id];

    return (
      <div key={cartItem.id}>
        <li className="flex flex-col py-6 pr-4 sm:flex-row sm:justify-between px-4 my-2 border border-1 border-green-700 border-b">
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
                    {cartItem.product.name
                      ? cartItem.product.name.toUpperCase()
                      : "N/A"}
                  </h3>
                  <p className="text-sm dark:text-gray-400 font-serif">
                    {cartItem.product.category.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    KES{" "}
                    {totalAmountPercartItem
                      ? `${totalAmountPercartItem.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })}`
                      : "N/A"}
                  </p>
                  <p className="text-sm  dark:text-gray-600">
                    KES{" "}
                    {cartItem.product.price
                      ? `${cartItem.product.price.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })}`
                      : "N/A"}
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
                    <span className="text-green-700 hover:text-white ">
                      Remove
                    </span>
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
                  {/* <label className="mr-3 mb-2">Quantity</label> */}
                  <button
                    onClick={() => increaseItemQuantity(cartItem.id)}
                    className="w-8 text-green-900 h-8 pb-2 hover:bg-white  m-auto font-serif text-center text-lg bg-transparent border-b-2 rounded"
                    step="1"
                  >
                    +
                  </button>
                  <div className="px-6 pb-1 text-green-900 border-b border-1 border-solid border-green-900">
                    {cartItemQuantities[cartItem.id]}
                  </div>
                  <button
                    onClick={() => decreaseItemQuantity(cartItem.id)}
                    className="w-8 h-8  text-green-900 hover:bg-white  m-auto font-serif text-center text-lg bg-transparent border-b-2 rounded"
                    step="1"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  });

  // -------------------------------------------- THE INTERFACE--------------------------------------------

  return (
    <div className="">
      <div className=" h-screen overflow-y-scroll mb-4 bg-white  flex border font-serif border-1 border-green-700 flex-col  w-full  sm:p-2 dark:bg-gray-900 text-gray-800">
        <div className="flex justify-end mt-0">
          <p
            onClick={() => {
              setCartVisible(false);
            }}
            className="text-black-500 text-2xl"
          >
            <AiOutlineCloseSquare />{" "}
          </p>
        </div>
        <h2 className="text-4xl  font-serif font-semibold text-center ">
          YOUR CART
        </h2>
        <div className="flex justify-center w-full">
          {currentUserCartItems.length === 0 ? (
            <Lottie className="w-full" animationData={EmptyCart} />
          ) : (
            <Lottie className="w-1/4" animationData={AddtoCart} />
          )}
        </div>

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
          <p
            onClick={() => {
              navigate("/products");
              setCartVisible(false);
            }}
            className="font-serif text-base text-blue-800 underline cursor-pointer"
          >
            Click here to continue shopping
          </p>
        </div>
        <div className="flex justify-end space-x-4 mb-16">
          <button
            onClick={clearCartHandler}
            type="button"
            className="px-6 py-2 border-solid border-1 border-green-700 rounded-md bg-green-700 
            hover:bg-white hover:text-green-700 dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            Clear Cart
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            onClick={handleCheckout}
            disabled={isDisabled}
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
