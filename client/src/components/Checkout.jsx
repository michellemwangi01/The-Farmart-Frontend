import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataContext } from "../contextProvider/DataContextProvider";
import { useForm } from "react-hook-form";
import Payment from "./Payment";

function Checkout() {
  // ------------------- DEFINE STATE VARIABLES
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [transactionID, setTransactionID] = useState("");
  const [orderTotalAmount, setOrderTotalAmount] = useState(0);

  // ------------------- CALL AND USE DATA CONTEXT

  const {
    hostedRoutePrefix,
    localRoutePrefix,
    products,
    currentUserCartItems,
    setCurrentUserCartItems,
    Kenya_counties,
    currentUser,
  } = useContext(dataContext);

  // ------------------- CALL AND USE FORM HOOK

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // -------------------TOAST NOIFICATIONS

  const orderSuccessfullyPlaced = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  const toastSuccessfulRemoveFromOrder = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  // ------------------- HANDLE REMOVE FROM ORDER TEMPLATE

  const deleteFromOrder = (id) => {
    const updatedCartItems = currentUserCartItems.filter(
      (cartItem) => cartItem.id != id
    );
    setCurrentUserCartItems(updatedCartItems);
    axios
      .delete(`${localRoutePrefix}/cartitems/cart_items/${id}`)
      .then((response) => {
        toastSuccessfulRemoveFromOrder(
          "Item successfully removed from order!",
          "success"
        );
      })
      .catch((error) => {
        console.error("Error removing item from order", error);
      });
  };

  // ------------------- CALCULATE TOTAL ORDER AMOUNT

  useEffect(() => {
    const totalAmount = currentUserCartItems.reduce(
      (total, cartItem) => total + cartItem.product.price,
      0
    );
    setOrderTotalAmount(totalAmount);
  }, [currentUserCartItems]);

  // ------------------- ORDER ITEMS SUMMARY TEMPLATE

  const cartItemsList = currentUserCartItems.map((cartItem) => (
    <div class="flex flex-col rounded-lg bg-gray-100 sm:flex-row">
      <img
        class="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={`${cartItem.product.image}`}
        alt=""
      />
      <div class="flex w-full flex-col px-4 py-4">
        <span class="font-semibold">{cartItem.product.name}</span>
        <span class="float-right text-gray-400">
          {cartItem.product.vendor.business_name}
        </span>
        <p>Quantity: 4 batches</p>
        <p class="text-lg font-bold">
          KES{" "}
          {cartItem.product.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </p>
        <p
          onClick={() => deleteFromOrder(cartItem.id)}
          className="flex items-center justify-end text-red-600 font-light"
        >
          <FaRegTrashAlt className="text-red-400" />
        </p>
      </div>
    </div>
  ));

  // -------------------GENERATE RANDOM TRANSACTION ACCOUNT

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }

  // Create a unique account number with a prefix and random identifier
  function generateUniqueAccountNumber(prefix, length) {
    const randomString = generateRandomString(length);
    return prefix + randomString;
  }

  // ------------------- HANDLE ORDER SUBMIT

  const handleSubmitOrderDetails = (data) => {
    setPopupOpen(true);
    setPhoneNumber(data.phone_number);
    const prefix = "FAR";
    const transactionID = generateUniqueAccountNumber(prefix, 6);
    setTransactionID(transactionID);
    const delivery_type =
      data.Pickup === "on" ? "Customer Pickup" : "DoorStepDelivery";
    console.log(transactionID);
    const orderData = {
      ...data,
      payment_uid: transactionID,
      user_id: currentUser,
      product_id: 5,
      vendor_id: 6,
      quantity: 4,
      status: "Order Placed",
      delivery_type: delivery_type,
      amount: orderTotalAmount,
    };
    console.log(orderData);
    axios
      .post("http://127.0.0.1:5555/orders/orders", orderData)
      .then((res) => {
        console.log("response", res.data);
        orderSuccessfullyPlaced(
          "Your order is sucessfully placed. Complete payment to confirm your order",
          "success"
        );
      })
      .catch((error) => {
        console.error("Post Error", error);
      });
  };

  // --------------------- OPEN AND CLOSE PAYMENT POPUP

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <div>
        <Payment
          isOpen={isPopupOpen}
          onClose={closePopup}
          transactionID={transactionID}
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
          orderTotalAmount={orderTotalAmount}
        />
      </div>
      <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" class="text-2xl font-bold text-gray-800">
          Farmart
        </a>
        <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div class="relative">
            <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li class="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span class="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li class="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span class="font-semibold text-gray-900">Order</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li class="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span class="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(handleSubmitOrderDetails)}
        class="mt-5 grid gap-6"
      >
        <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div class="px-4 pt-8">
            <p class="text-xl font-medium">Order Summary</p>
            <p class="text-gray-400">
              Check your items. And select a suitable shipping method.
            </p>
            <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {/* ----------------------CART ITEMS */}
              {cartItemsList}
              {/* ----------------------CART ITEMS */}
            </div>

            <p class="mt-8 text-lg font-medium">Shipping Methods</p>

            <div class="relative mb-4">
              <input
                {...register("DeliveryOption")}
                class="peer hidden"
                id="radio_1"
                type="radio"
                name="DeliveryOption"
              />
              <span class="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-700 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-green-700 peer-checked:text-green-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-green-700 p-4"
                for="radio_1"
              >
                <img
                  class="w-14 object-contain"
                  src="/images/naorrAeygcJzX0SyNI4Y0.png"
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Door Step Delivery</span>
                  <p class="text-slate-500 text-sm leading-6 ">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div class="relative">
              <input
                {...register("DeliveryOption")}
                class="peer hidden"
                id="radio_2"
                type="radio"
                name="DeliveryOption"
              />
              <span class="peer-checked:border-green-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-green-700 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-green-700 peer-checked:text-green-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-green-700 p-4"
                for="radio_2"
              >
                <img
                  class="w-14 object-contain"
                  src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Customer Pick Up</span>
                  <p class="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-18">
            <p class="text-xl font-medium">Payment Details</p>
            <p class="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div class="">
              <label for="email" class="mt-4 mb-2 block text-sm font-medium">
                Email Confirmation
              </label>
              <div class="relative">
                <input
                  {...register("email", {
                    required: "Enter a valid email",
                    validate: (value) =>
                      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                        value
                      ) || "Enter a valid email",
                  })}
                  type="text"
                  id="email"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500"
                  placeholder="your.email@gmail.com"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-red-700">{errors.email?.message}</p>
              <label
                for="card-holder"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Full Name
              </label>
              <div class="relative">
                <input
                  {...register("FullName", {
                    required: "Full name must be a minimum of 8 characters",
                    minLength: {
                      value: 8,
                    },
                  })}
                  type="text"
                  id="card-holder"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500"
                  placeholder="Your full name here"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-red-700">{errors.FullName?.message}</p>

              <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
                Phone Number
              </label>
              <div class="flex">
                <div class="relative w-7/12 flex-shrink-0">
                  <input
                    {...register("phone_number", {
                      required: "Phone number must be 10 digits",

                      minLength: {
                        value: /^[0-9]{10}$/,
                      },
                    })}
                    type="text"
                    id="card-no"
                    class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500"
                    placeholder="xxxx-xxx-xxx"
                  />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      class="h-4 w-4 text-green-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xs text-red-700">
                {errors.phone_number?.message}
              </p>
              <label
                for="billing-address"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Shipping Address
              </label>
              <div class="flex flex-col sm:flex-row">
                <div class="relative flex-shrink-0 sm:w-7/12">
                  <input
                    {...register("shipping_address", {
                      required: "Shipping address is required",

                      minLength: {
                        value: /^[0-9]{10}$/,
                      },
                    })}
                    type="text"
                    id="billing-address"
                    class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500"
                    placeholder="Exact Delivery Address"
                    required
                  />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <span class="fi fi-ke fis"></span>
                  </div>
                </div>
                <select
                  {...register("county", {
                    required: "County is required",
                    minLength: {
                      value: 4,
                      message: "Must be Selected",
                    },
                  })}
                  name="county"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-green-500 focus:ring-green-500"
                >
                  {Kenya_counties.map((county) => (
                    <option key={county} value={county}>
                      {county}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-red-700">
                {errors.ShippingAddress?.message}
              </p>
              {/* <!-- Total --> */}
              <div class="mt-6 border-t border-b py-2">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">Subtotal</p>
                  <p class="font-semibold text-gray-900">
                    KES{" "}
                    {`${orderTotalAmount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}`}
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">Shipping</p>
                  <p class="font-semibold text-gray-900">
                    KES{" "}
                    {`${(orderTotalAmount * 0.05).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}`}
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Total</p>
                <p class="text-2xl font-semibold text-gray-900">
                  KES{" "}
                  {`${(
                    orderTotalAmount +
                    orderTotalAmount * 0.05
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`}
                </p>
              </div>
            </div>
            <button
              type="submit"
              class="mt-4 bg-blue-600  mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
