import React, { useContext, useEffect, useState } from "react";
import "../styles/PaymentPopup.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
// import { FaWindowClose } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { dataContext } from "../contextProvider/DataContextProvider";

function Payment({
  isOpen,
  closePopup,
  onPlaceOrder,
  transactionID,
  phoneNumber,
  setPhoneNumber,
  orderTotalAmountWithShipping,
}) {
  // ------------------- DEFINE STATE VARIABLES -----------------------------
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    localRoutePrefix,
    hostedRoutePrefix,
    headers,
    isNewOrder,
    setIsNewOrder,
  } = useContext(dataContext);
  const navigate = useNavigate();
  // ----------------------------- TOAST NOIFICATIONS -----------------------------
  const toastPaymentSuccessfullyInitiated = (message, type) => {
    toast(message, type);
  };

  const toastEmptyDetails = (message, type) =>
    toast(message, { autoClose: 3000, type });

  const handlePlaceOrderClick = (data) => {
    console.log(data);
    if (phoneNumber && orderTotalAmountWithShipping) {
      pay();
      onClose();
      navigate("/orderhistory");
      axios
        .delete(`${hostedRoutePrefix}/cartitems/clear_cart_items`, { headers })
        .then((res) => {
          setIsNewOrder(!isNewOrder);
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  };

  const handlePaymentDetailsInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // ----------------------------- CLOSE PAYMENT POPUP -----------------------------

  const onClose = () => {
    closePopup();
  };

  // const newTransactionID =
  // ----------------------------- DEFINE PAY HANDLER -----------------------------
  const pay = () => {
    console.log(orderTotalAmountWithShipping, phoneNumber);
    if (orderTotalAmountWithShipping === 0 || phoneNumber === "") {
      toastEmptyDetails(
        "Please fill out all details correctly before initiating payment.",
        "warning"
      );
    } else {
      console.log(
        `amount=${orderTotalAmountWithShipping}&msisdn=${phoneNumber}&account_no=${transactionID}`
      );
      const url = "https://tinypesa.com/api/v1/express/initialize";
      fetch(url, {
        body: `amount=${1}&msisdn=${phoneNumber}&account_no=${transactionID}`,
        headers: {
          Apikey: "LTSDq9LXd2j",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.ok) {
            console.log("SUCCESSFUL");
          }
          console.log("Pay request sent");
          toastPaymentSuccessfullyInitiated(
            "Process initiated, please check your phone to complete payment.",
            "success"
          );
        });
    }
  };

  return (
    <div
      className={`popup ${
        isOpen ? "open" : ""
      } flex w-full justify-center shadow-2xl`}
    >
      <div className="popup-content  flex flex-col w-1/3 mg-auto border-solid border-blue-800 border-2 p-2 ">
        <div className="flex justify-end">
          <p onClick={onClose} className="text-black-500 text-2xl">
            <AiOutlineCloseSquare />{" "}
          </p>
        </div>

        <h2 className="text-center text-blue-800 font-bold text-2xl font-serif">
          Confirm Your Order
        </h2>
        <label className="font-light" htmlFor="phone">
          Phone Number:
        </label>
        <input
          {...register("EnteredPhoneNumber")}
          type="text"
          id="phone"
          value={phoneNumber}
          onChange={handlePaymentDetailsInput}
          class="bg-gray-50 border border-1 border-blue-800 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label className="font-light" htmlFor="amount">
          Amount:
        </label>
        <input
          {...register("orderTotalAmount")}
          type="number"
          id="amount"
          value={orderTotalAmountWithShipping}
          onChange={handlePaymentDetailsInput}
          class="bg-gray-50 border border-1 border-blue-800  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <div className="flex justify-center">
          <button
            className="bg-blue-900 border-solid border-2 border-blue-600  w-2/4 mg-auto text-center text-white hover:text-white"
            onClick={handleSubmit(handlePlaceOrderClick)}
          >
            Make Payment
          </button>
        </div>

        <p className="font-light mt-4">
          *Once you click the button below, you will receive a notification on
          your phone to pay Via Mpesa. Enter your PIN to complete the payment
          and you will receive an SMS notification from MPESA.
        </p>
      </div>
    </div>
  );
}

export default Payment;
