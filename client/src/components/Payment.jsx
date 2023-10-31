import React, { useState } from "react";
import "../styles/PaymentPopup.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment({
  isOpen,
  onClose,
  onPlaceOrder,
  transactionID,
  phoneNumber,
  setPhoneNumber,
  orderTotalAmount,
}) {
  // ------------------- DEFINE STATE VARIABLES

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // -------------------TOAST NOIFICATIONS
  const toastPaymentSuccessfullyInitiated = (message, type) => {
    toast(message, type);
  };

  const toastEmptyDetails = (message, type) =>
    toast(message, { autoClose: 3000, type });

  const handlePlaceOrderClick = (data) => {
    console.log(data);
    if (phoneNumber && orderTotalAmount) {
      pay();
      //   onClose();
    }
  };

  // ------------------- DEFINE PAY HANDLER
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
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <h2>Place Order</h2>
        <label htmlFor="phone">Phone Number:</label>
        <input
          {...register("EnteredPhoneNumber")}
          type="text"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          {...register("orderTotalAmount")}
          type="number"
          id="amount"
          value={orderTotalAmount}
        />
        <button onClick={handleSubmit(handlePlaceOrderClick)}>
          Make Payment
        </button>
        <button onClick={onClose}>Close</button>
        <p>
          *Once you click the button below, you will receive a notification on
          your phone to pay Via Mpesa. Enter your PIN to complete the payment
          and you will receive an SMS notification from MPESA.
        </p>
      </div>
    </div>
  );
}

export default Payment;
