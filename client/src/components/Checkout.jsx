import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataContext } from "../contextProvider/DataContextProvider";

function Checkout() {
  // -------------------CREATE STATE VARIABLES
  const [totalAmountDue, setTotalAmountDue] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentConfirmationDetails, setPaymentConfirmationDetails] =
    useState("");
  const [transactionInitiated, setTransactionInitiated] = useState(false);

  // -------------------CALL AND USE DATA CONTEXT
  const { hostedRoutePrefix, localRoutePrefix } = useContext(dataContext);

  // -------------------TOAST NOIFICATIONS
  const toastPaymentSuccessfullyInitiated = (message, type) => {
    toast(message, type);
  };

  const toastEmptyDetails = (message, type) =>
    toast(message, { autoClose: 5000, type });

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

  // -------------------DEFINE PAY HANDLER
  const pay = () => {
    setTotalAmountDue(1);
    setPhoneNumber("0700562291");
    const prefix = "FAR";
    const transactionID = generateUniqueAccountNumber(prefix, 6);
    console.log(totalAmountDue, phoneNumber);
    if (totalAmountDue === 0 || phoneNumber === "") {
      toastEmptyDetails(
        "Please fill out all details correctly before initiating payment.",
        "warning"
      );
    } else {
      console.log(
        `amount=${totalAmountDue}&msisdn=${phoneNumber}&account_no=${transactionID}`
      );
      const url = "https://tinypesa.com/api/v1/express/initialize";
      fetch(url, {
        body: `amount=${totalAmountDue}&msisdn=${phoneNumber}&account_no=${transactionID}`,
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
          setTransactionInitiated(true);
        });
    }
  };

  return (
    <div>
      <button onClick={pay}>Click to Pay</button>
      <p>Payment confirmation details: {paymentConfirmationDetails}</p>
    </div>
  );
}

export default Checkout;
