import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout() {
  const [totalAmountDue, setTotalAmountDue] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const toastPaymentSuccessfullyInitiated = (message, type) => {
    toast(message, type);
  };

  const toastEmptyDetails = (message, type) =>
    toast(message, { autoClose: 5000, type });

  const pay = () => {
    setTotalAmountDue(1);
    setPhoneNumber("0700562291");
    console.log(totalAmountDue, phoneNumber);
    if (totalAmountDue === 0 || phoneNumber === "") {
      toastEmptyDetails(
        "Please fill out all details correctly before initiating payment.",
        "warning"
      );
    } else {
      console.log(
        `amount=${totalAmountDue}&msisdn=${phoneNumber}&account_no=2`
      );
      const url = "https://tinypesa.com/api/v1/express/initialize";
      fetch(url, {
        body: `amount=${totalAmountDue}&msisdn=${phoneNumber}&account_no=2`,
        headers: {
          Apikey: "TnfBPxXIGWe",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.ok) {
            console.log(responseData);
          } else {
            console.log("No data for you hun:(");
          }
        });

      console.log("Pay request sent");
      toastPaymentSuccessfullyInitiated(
        "Process initiated, please check your phone to complete payment.",
        "success"
      );
    }
  };

  return (
    <div>
      <button onClick={pay}>Pay</button>
    </div>
  );
}

export default Checkout;

// TinyPesa in JS
// function pay() {
//   if (totalAmountDue == 0 || phoneNumber == "") {
//     handleWarningClick(
//       "Please fill out all details correctly before initiating payment."
//     );
//   } else {
//     console.log(`amount=${totalAmountDue}&msisdn=${phoneNumber}&account_no=2`);
//     var url = "https://tinypesa.com/api/v1/express/initialize";
//     fetch(url, {
//       body: `amount=${totalAmountDue}&msisdn=${phoneNumber}&account_no=2`,
//       headers: {
//         Apikey: "TnfBPxXIGWe",
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       method: "POST",
//     })
//       .then((res) => res.json())
//       .then((respose) => {
//         if (respose.ok) {
//           console.log("SUCCESSFUL");
//         }
//       });
//     console.log("Pay request sent");
//     handleSucessClick(
//       "Process initiated, please check your phone to complete payment."
//     );
//   }
// }
