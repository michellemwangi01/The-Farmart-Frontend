import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaRegWindowClose } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineCloseSquare } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@material-tailwind/react";
import { dataContext } from "../contextProvider/DataContextProvider";

import "../styles/ProductDetails.css";

const ProductDetails = ({ togglePopup, currentProductDetails }) => {
  // -------------------------------------------- STATE VARIABLES  --------------------------------------------

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [addToCartBtnText, setAddToCartBtnText] = useState("");
  const [productAlreadyInCart, setProductAlreadyInCart] = useState(false);

  // -------------------------------------------- USE HOOKS  --------------------------------------------

  const navigate = useNavigate();
  const {
    capitalizeFirstLetter,
    isAddedToCart,
    setIsAddedToCart,
    localRoutePrefix,
    hostedRoutePrefix,
    jwToken,
    setCartVisible,
    headers,
    currentUser,
    currentUserCartItems,
    setIsPopupVisible,
  } = useContext(dataContext);
  console.log(isAddedToCart);

  // --------------------------------------------  CHECK IF PRODUCT ALREADY IN CART  --------------------------------------------
  useEffect(() => {
    const existingProductOnCart = currentUserCartItems.filter(
      (cartItem) => cartItem.product_id === currentProductDetails.id
    );
    console.log(existingProductOnCart);
    if (existingProductOnCart.length > 0) {
      setProductAlreadyInCart(true);
    }
  });

  // -------------------------------------------- TOAST NOIFICATIONS --------------------------------------------

  const itemAddedToCart = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  // -------------------------------------------- STORING BUTTONS IN VARIABLES  --------------------------------------------

  const addToCartHandler = () => {
    const addedProduct = {
      product_id: currentProductDetails.id,
      quantity: 1,
      user_id: currentUser.user_id,
    };
    console.log(addedProduct);
    axios
      .post(`${hostedRoutePrefix}/cartitems/cart_items`, addedProduct, {
        headers,
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
    itemAddedToCart(`Product has successfully been added to cart.`, "success");
    setIsAddedToCart(true);
  };

  const addToCartBtn = (
    <button
      onClick={addToCartHandler}
      className="
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800
      text-base
      flex
      items-center
      justify-center
      leading-none
      text-white
      bg-blue-900
      w-full
      py-4
      hover:bg-blue-700
    "
    >
      <AiOutlineShoppingCart className="mr-2" />
      Add to Cart
    </button>
  );

  const proceedToCheckoutHandler = () => {
    setIsAddedToCart(false);
    navigate("/checkout");
  };

  const checkoutBtn = (
    <button
      onClick={proceedToCheckoutHandler}
      className="
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
      text-base
      flex
      items-center
      justify-center
      leading-none
      text-white
      bg-blue-900
      w-full
      py-4
      hover:bg-blue-700
    "
    >
      <BiMoney className="mr-2" />
      Proceed to Checkout
    </button>
  );

  const viewCartHandler = () => {
    setIsAddedToCart(false);
    setCartVisible(true);
    setIsPopupVisible(false);
  };

  const viewCartBtn = (
    <button
      onClick={viewCartHandler}
      className="
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
      text-base
      flex
      items-center
      justify-center
      leading-none
      text-white
      bg-blue-900
      w-full
      py-4
      hover:bg-blue-700
    "
    >
      <MdShoppingCartCheckout className="mr-2" />
      View Your Cart
    </button>
  );
  // -------------------------------------------- THE INTERFACE  --------------------------------------------

  return (
    <div>
      <div className="popup active">
        <div className="popup-content w-2/3 h-5/6 overflow-scroll ">
          <div className="flex justify-end items-top  ">
            <p onClick={togglePopup} className="text-black text-2xl fixed">
              <AiOutlineCloseSquare />{" "}
            </p>
          </div>
          <h1 className="text-center text-2xl font-serif text-black">
            {" "}
            Product Details
          </h1>

          <div className="md:flex items-start justify-center  py-8 2xl:px-20 md:px-2 px-2 sm:w-full ">
            <div
              className="xl:w-3/6 lg:w-2/5 w-80 "
              style={{ height: "40rem" }}
            >
              <div className="w-full h-1/2 overflow-hidden mb-4">
                {" "}
                <img
                  className="w-full h-full object-cover object-center"
                  alt="product images"
                  src={currentProductDetails.category.image}
                />
              </div>
              <div className="w-full h-1/2 overflow-hidden">
                {" "}
                <img
                  className="w-full h-full object-cover object-center"
                  alt="product images"
                  src={currentProductDetails.image}
                />
              </div>
            </div>

            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
              <div className="border-b flex justify-between border-gray-200 pb-6">
                <h1
                  className="
							lg:text-2xl
							text-2xl
							font-semibold
                            font-serif
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                >
                  {capitalizeFirstLetter(currentProductDetails.name)}
                </h1>
                <h1
                  className="
							lg:text-2xl
							text-2xl
							font-semibold
                            font-serif
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                >
                  Ksh{" "}
                  {capitalizeFirstLetter(
                    currentProductDetails.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })
                  )}
                </h1>
              </div>
              <div className="py-4 border-b border-gray-200 flex flex-wrap items-center justify-between">
                <p className="text-base leading-4 text-gray-800">Category</p>
                <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600">
                    {currentProductDetails.category.name}
                  </p>
                  <div
                    className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
                  ></div>
                  <svg
                    className="cursor-pointer"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                <p className="text-base leading-4 text-gray-800">Rating</p>
                <div className="flex items-center justify-center">
                  <p className="text-sm leading-none text-gray-600 mr-3">
                    <Rating value={4} readonly />;
                  </p>
                  <svg
                    className="cursor-pointer"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {productAlreadyInCart || isAddedToCart ? (
                <div>
                  {viewCartBtn}
                  {checkoutBtn}
                </div>
              ) : (
                addToCartBtn
              )}

              <div>
                <div className="mt-7">
                  <p className="font-bold text-black font-serif">
                    {" "}
                    Product Details
                  </p>
                  <p className="xl:pr-10 mt-2 text-base lg:leading-tight leading-normal text-gray-600 ">
                    <span className="text-gray-900"> Description:</span>{" "}
                    {currentProductDetails.description}
                  </p>
                </div>

                <p className="text-base leading-4 mt-4 text-gray-600">
                  <span className="text-gray-900">Product Code:</span>{" "}
                  8BN321AF2IF0NYA
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  <span className="text-gray-900">Product availability: </span>{" "}
                  In stock
                </p>
                <p className="text-base leading-4 mt-4 text-gray-600">
                  <span className="text-gray-900">Location: </span> Available in
                  and around {currentProductDetails.vendor.county}Meru, Kenya.
                </p>

                <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
                  <span className="text-gray-900"> Bulk order discounts:</span>{" "}
                  {currentProductDetails.vendor.name}
                </p>
                <p className="mt-4 font-bold text-black font-serif">
                  {" "}
                  Vendor Details
                </p>
                <p className="text-base leading-4 mt-2 mb-2 text-gray-600">
                  <span className="text-gray-900">
                    <span className="text-gray-900"> Sold by: </span>{" "}
                  </span>{" "}
                  {currentProductDetails.vendor.business_name}
                </p>
                <Link
                  to="/vendors"
                  className="text-base leading-4 mt-4 text-blue-600 underline"
                >
                  More information about this vendor
                </Link>
              </div>
              <div>
                <div className="border-t border-b py-4 mt-7 border-gray-200">
                  <div
                    onClick={() => setShow(!show)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-base leading-4 text-gray-800">
                      Shipping and returns
                    </p>
                    <button
                      className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                      aria-label="show or hide"
                    >
                      <svg
                        className={
                          "transform " + (show ? "rotate-180" : "rotate-0")
                        }
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1L5 5L1 1"
                          stroke="#4B5563"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={
                      "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                      (show ? "block" : "hidden")
                    }
                    id="sect"
                  >
                    We are able to organize for shipping. However, you will be
                    responsible for paying for your own shipping costs for
                    returning your item. Shipping costs are also nonrefundable.
                  </div>
                </div>
              </div>
              <div>
                <div className="border-b py-4 border-gray-200">
                  <div
                    onClick={() => setShow2(!show2)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="text-base leading-4 text-gray-800">
                      Contact us
                    </p>
                    <button
                      className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                      aria-label="show or hide"
                    >
                      <svg
                        className={
                          "transform " + (show2 ? "rotate-180" : "rotate-0")
                        }
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1L5 5L1 1"
                          stroke="#4B5563"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={
                      "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                      (show2 ? "block" : "hidden")
                    }
                    id="sect"
                  >
                    If you have any questions on how to return your item to us,
                    contact us. Mobile: {currentProductDetails.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
