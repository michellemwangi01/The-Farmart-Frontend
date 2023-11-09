import React, { useContext, useState } from "react";
import "../styles/ProductDetails.css";
import axios from "axios";
import { AiOutlineShoppingCart, AiOutlineCloseSquare } from "react-icons/ai";
import { dataContext } from "../contextProvider/DataContextProvider";

const VendorApprovedOrderDetails = ({
  selectedOrderDetails,
  setIsOrderDetailsVisible,
}) => {
  console.log(selectedOrderDetails);
  // -------------------------------------------- STATE VARIABLES  --------------------------------------------

  const [viewCarrierDetails, setViewCarrierDetails] = useState(false);
  const [orderFulfilledMessage, setOrderFulfilledMessage] = useState("");
  const [isOrderFulfilled, setIsOrderFulfilled] = useState(false);
  const { localRoutePrefix, hostedRoutePrefix } = useContext(dataContext);

  // -------------------------------------------- VIEW CARRIER DETAILS HANDLER  --------------------------------------------

  const viewCarrierDetailsHandler = () => {
    setViewCarrierDetails(!viewCarrierDetails);
  };
  const currentProduct = selectedOrderDetails.products;
  // -------------------------------------------- VIEW PRODUCT DETAILS  --------------------------------------------

  const productDetails = (
    <div className="mt-2 md:mt-2 flex p-4 font-serif flex-col bg-white md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
      <div className="pb-4 md:pb-8 w-full md:w-40">
        <img
          className="w-full hidden md:block"
          src={currentProduct.image}
          alt="dress"
        />
      </div>
      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-xl xl:text-xl font-serif font-semibold leading-6 text-gray-800">
            {currentProduct.name ? currentProduct.name.toUpperCase() : "N/A"}
          </h3>
          <div className="flex justify-start items-start text-gray-900 flex-col space-y-2">
            <p className=" font-semibold">Vendor Details</p>
            <p className="text-sm leading-none text-gray-800">
              {selectedOrderDetails.vendor.business_name}
            </p>
            <p className="text-sm leading-none text-gray-800">
              {selectedOrderDetails.vendor.mobile_number}
            </p>
            <p className="text-sm leading-none text-gray-800">
              {selectedOrderDetails.vendor.email_address}
            </p>
          </div>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base xl:text-lg leading-6">
            Ksh
            {selectedOrderDetails.amount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p className="text-base xl:text-lg leading-6 text-gray-800">
            Qty. {selectedOrderDetails.quantity}
          </p>
          <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
            Ksh
            {(
              selectedOrderDetails.amount * selectedOrderDetails.quantity
            ).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  );
  // -------------------------------------------- FULFILL ORDER  --------------------------------------------

  const orderFulFillHandler = () => {
    axios
      .patch(`${hostedRoutePrefix}/orders/orders/${selectedOrderDetails.id}`, {
        status: "Delivered & Paid",
      })
      .then((res) => {
        console.log(res.data);
        setIsOrderFulfilled(true);
        setOrderFulfilledMessage(
          `This order, No.${selectedOrderDetails.id} is successfully marked as fulfilled.`
        );
        selectedOrderDetails.orders.status = "Delivered & Paid";
      });
  };
  // -------------------------------------------- TOGGLE DETAILS PAGE VIEW --------------------------------------------

  const togglePopup = () => {
    setIsOrderDetailsVisible(false);
  };

  // -------------------------------------------- DETAILS PAGE INTERFACE  --------------------------------------------

  return (
    <div className="popup active font-serif">
      <div className="popup-content w-2/3 h-5/6 overflow-scroll  ">
        {orderFulfilledMessage !== "" && (
          <div
            id="CancellationNotificationDiv"
            className={isOrderFulfilled ? "bg-green-500" : "bg-red-500"}
            style={{ position: "fixed", left: 0, top: 0, width: "100%" }}
          >
            <p className="text-white text-center text-lg font-serif py-2 ">
              {orderFulfilledMessage}
            </p>
          </div>
        )}

        <div className="flex justify-end items-top  ">
          <p onClick={togglePopup} className="text-black text-2xl fixed">
            <AiOutlineCloseSquare />{" "}
          </p>
        </div>

        <div className="py-4 px-4 md:px-2 2xl:px-10 2xl:container 2xl:mx-auto ">
          <div className="flex justify-between item-start space-y-2 ">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
              Order Number #{selectedOrderDetails.id}
            </h1>
            <div className="flex flex-col">
              <p className="text-base font-serif font-medium leading-6 text-gray-800">
                Ordered on: {selectedOrderDetails.orders.date_created}
              </p>
              <p className="text-base font-serif font-medium leading-6 text-gray-800">
                Status: {selectedOrderDetails.orders.status}
              </p>
              <p className="text-base font-serif font-medium leading-6 text-gray-800">
                Payment Confirmation:{" "}
                {selectedOrderDetails.orders.payment_uid
                  ? selectedOrderDetails.orders.payment_uid.toUpperCase()
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
              <div
                style={{ maxHeight: "40rem" }}
                className="flex flex-col justify-start overflow-y-scroll border border-1 border-solid border-green-700 items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
              >
                <h1 className="text-center text-gray-900 text-2xl font-serif">
                  Product
                </h1>
                {productDetails}
              </div>
              <div className="flex justify-center md:flex-row flex-col border border-1 border-solid border-green-700 items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    Summary
                  </h3>
                  <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between  w-full">
                      <p className="text-base leading-4 text-gray-800 bg-gray-200  p-1">
                        Subtotal
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        Ksh{" "}
                        {(
                          selectedOrderDetails.amount -
                          selectedOrderDetails.amount * 0.05
                        ).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base bg-gray-200  p-1 leading-4 text-gray-800">
                        Discount{" "}
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        Ksh 0.00
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base leading-4 text-gray-800 bg-gray-200  p-1">
                        Shipping
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        Ksh {selectedOrderDetails * 0.05}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base font-semibold leading-4 text-gray-800">
                      Total
                    </p>
                    <p className="text-base font-semibold leading-4 text-gray-600">
                      Ksh{" "}
                      {selectedOrderDetails.amount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    Shipping
                  </h3>
                  <div className="flex justify-between items-start w-full">
                    <div className="flex justify-center items-center space-x-4">
                      <div class="w-8 h-8">
                        <img
                          class="w-full h-full"
                          alt="logo"
                          src="https://i.ibb.co/L8KSdNQ/image-3.png"
                        />
                      </div>
                      <div className="flex flex-col justify-start items-center">
                        <p className="text-lg leading-6 font-semibold text-gray-800">
                          Delivery
                          <br />
                          <span className="font-normal">
                            Delivery with 24 Hours
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold leading-6 text-gray-800">
                      Ksh 280.00
                    </p>
                  </div>
                  <div className="flex flex-col  text-base justify-center items-center">
                    <button
                      onClick={viewCarrierDetailsHandler}
                      className="w-3/4 hover:bg-green-500  hover:border hover:border-1 hover:border-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 py-5 md:w-full bg-white border-1 border-green-900 border-solid text-base font-medium leading-4 text-green-900"
                    >
                      View Carrier Details
                    </button>

                    {viewCarrierDetails && (
                      <div className="mt-4 bg-gray-200 text-gray-900 p-2 font-serif">
                        <p>
                          <span className="font-semibold">Company:</span> Pickup
                          Mtaani Ltd.
                        </p>
                        <p>
                          <span className="font-semibold">Mobile Number:</span>{" "}
                          {selectedOrderDetails.vendor.mobile_number}
                        </p>
                        <p>
                          <span className="font-semibold">Email:</span>{" "}
                          PickupMtaani@bizmail.com
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 w-full xl:w-96 flex border border-1 border-solid border-green-700 justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Customer
              </h3>
              <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                <div className="flex flex-col justify-start items-start flex-shrink-0">
                  <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                    <div className="w-20 h-20">
                      <img
                        src={selectedOrderDetails.orders.user.profile_pic}
                        alt="avatar"
                      />
                    </div>

                    <div className=" flex justify-start items-start flex-col space-y-2">
                      <p className="text-base font-semibold leading-4 text-left text-gray-800">
                        {selectedOrderDetails.orders.user.username}
                      </p>
                      <p className="text-sm leading-5 text-gray-600">
                        10 Previous Orders
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                        stroke="#1F2937"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 7L12 13L21 7"
                        stroke="#1F2937"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="cursor-pointer text-sm leading-5 text-gray-800">
                      {selectedOrderDetails.orders.user.email}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                  <div className="flex flex-wrap justify-center lg:justify-start xl:flex-col flex-col ">
                    <div className="flex  lg:justify-start lg:items-start flex-col space-y-4 xl:mt-8">
                      <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                        Shipping Address
                      </p>
                      <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        {selectedOrderDetails.shipping_address}, <br />
                        {selectedOrderDetails.county}
                      </p>
                    </div>
                    <div className="flex lg:justify-start  lg:items-start flex-col space-y-4 my-4">
                      <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800 ">
                        Billing Address
                      </p>
                      <p className="lg:w-full text-center md:text-left text-sm leading-5 text-gray-600">
                        180 North King Street, Northhampton MA 1060
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-center items-center ">
                    {" "}
                    <button
                      onClick={orderFulFillHandler}
                      className="md:mt-0 py-5 bg-gray-900 text-base hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900 border border-green-900 font-medium 2xl:w-full leading-4 text-white"
                    >
                      {isOrderFulfilled
                        ? " Order Fulfilled"
                        : "Mark as Complete"}
                    </button>
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

export default VendorApprovedOrderDetails;
