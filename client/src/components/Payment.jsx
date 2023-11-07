import React, { useEffect, useState } from "react";
import "../styles/PaymentPopup.css";
import { FaRegWindowClose } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";
// import { FaWindowClose } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment({
  isOpen,
  closePopup,
  onPlaceOrder,
  transactionID,
  phoneNumber,
  setPhoneNumber,
  orderTotalAmount,
}) {
  // ------------------- DEFINE STATE VARIABLES -----------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ----------------------------- TOAST NOIFICATIONS -----------------------------
  const toastPaymentSuccessfullyInitiated = (message, type) => {
    toast(message, type);
  };

  const toastEmptyDetails = (message, type) =>
    toast(message, { autoClose: 3000, type });

  const handlePlaceOrderClick = (data) => {
    console.log(data);
    if (phoneNumber && orderTotalAmount) {
      pay();
      // onClose();
    }
  };

  // ----------------------------- CLOSE PAYMENT POPUP -----------------------------

  const onClose = () => {
    closePopup();
  };

  // ----------------------------- DEFINE PAY HANDLER -----------------------------
  const pay = () => {
    console.log(orderTotalAmount, phoneNumber);
    if (orderTotalAmount === 0 || phoneNumber === "") {
      toastEmptyDetails(
        "Please fill out all details correctly before initiating payment.",
        "warning"
      );
    } else {
      console.log(
        `amount=${orderTotalAmount}&msisdn=${phoneNumber}&account_no=${transactionID}`
      );
      const url = "https://tinypesa.com/api/v1/express/initialize";
      fetch(url, {
        body: `amount=${orderTotalAmount}&msisdn=${phoneNumber}&account_no=${transactionID}`,
        headers: {
          Apikey: "TnfBPxXIGWe",
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
      <div className="popup-content flex flex-col w-1/3 mg-auto border-solid border-gray-400 border-2 ">
        <div className="flex justify-end">
          <p onClick={onClose} className="text-black-500 text-2xl">
            <AiOutlineCloseSquare />{" "}
          </p>
        </div>

        <h2 className="text-center font-bold text-2xl font-serif">
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
          onChange={(e) => setPhoneNumber(e.target.value)}
          //   className="border-solid border-2 border-blue-400"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label className="font-light" htmlFor="amount">
          Amount:
        </label>
        <input
          {...register("orderTotalAmount")}
          type="number"
          id="amount"
          value={orderTotalAmount}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <div className="flex justify-center">
          <button
            className="bg-transparent border-solid border-2 border-blue-600 text-blue-600 w-2/4 mg-auto text-center hover:text-white"
            onClick={handleSubmit(handlePlaceOrderClick)}
          >
            Make Payment
          </button>
        </div>

        <p className="font-light">
          *Once you click the button below, you will receive a notification on
          your phone to pay Via Mpesa. Enter your PIN to complete the payment
          and you will receive an SMS notification from MPESA.
        </p>
      </div>
    </div>
  );
}

export default Payment;
