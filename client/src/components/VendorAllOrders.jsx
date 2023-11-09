import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import axios from "axios";
import VendorApprovedOrderDetails from "./VendorApprovedOrderDetails";

import { useNavigate } from "react-router-dom";

const VendorAllOrders = () => {
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
  const [selectedOrderID, setSelectedOrderID] = useState(0);
  const [unfilteredVendorOrders, setUnfilteredVendorOrders] = useState([]);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const {
    api,
    localRoutePrefix,
    hostedRoutePrefix,
    jwToken,
    headers,
    vendorOrders,
    setVendorOrders,
  } = useContext(dataContext);

  console.log(vendorOrders);

  const navigate = useNavigate();
  // -------------------------------------------- FECTH SELECTED PRODUCT DETAILS  --------------------------------------------
  const ViewProductDetailsHandler = (id) => {
    const selectedOrder = vendorOrders.filter((selected_order) => {
      return selected_order.id === id;
    });
    setSelectedOrderDetails(selectedOrder[0]);
    setIsOrderDetailsVisible(true);
    console.log(selectedOrder);
  };

  // ------------------------------------------ FILTER ORDERS FOR CURRENT VENDOR -------------------------------------
  useEffect(() => {
    api
      .get(`${hostedRoutePrefix}/orders/vendor_orders`, { headers })
      .then((res) => {
        setVendorOrders(res.data);
        setUnfilteredVendorOrders(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(vendorOrders);

  // ------------------------------------------ CREATE ORDER HISTORY LIST -------------------------------------

  const orderHistoryList = vendorOrders
    .slice()
    .reverse()
    .map((orderItem) => (
      <tr
        key={orderItem.id}
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-gray-600"
      >
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="checkbox-table-search-1" class="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-green-900 font-serif  whitespace-nowrap dark:text-white"
        >
          # {orderItem.order_id}
        </th>
        <td
          className={`px-6 py-4 font-serif text-white ${
            orderItem.orders.status === "Order Placed"
              ? "bg-gray-500"
              : orderItem.orders.status === "Order Cancelled" ||
                orderItem.orders.status === "Order Rejected"
              ? "bg-red-400"
              : orderItem.orders.status === "In Progress"
              ? "bg-yellow-400"
              : orderItem.orders.status === "Delivered & Paid"
              ? "bg-green-500"
              : orderItem.orders.status === "Payment Received"
              ? "bg-green-500"
              : orderItem.orders.status === "Order Fulfilled"
              ? "bg-green-500"
              : orderItem.orders.status === "Delivery In Progress"
              ? "bg-yellow-500"
              : ""
          }`}
        >
          {orderItem.orders.status ? orderItem.orders.status : "N/A"}
        </td>
        <td class="px-6 py-4 font-serif text-gray-700">
          Ksh{" "}
          {orderItem.amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </td>
        <td class="px-6 py-4 font-serif text-gray-700">
          {orderItem.payment.mpesa_receipt_code
            ? orderItem.payment.mpesa_receipt_code.toUpperCase()
            : "N/A"}
        </td>
        <td class="px-6 py-4 font-serif text-gray-700">
          {orderItem.orders.payment_uid
            ? orderItem.orders.payment_uid.toUpperCase()
            : "N/A"}
        </td>
        <td class="px-6 py-4 font-serif text-gray-700">
          {orderItem.orders.delivery_type
            ? orderItem.orders.delivery_type
            : "N/A"}
        </td>
        <td class="px-6 py-4 font-serif text-gray-700">
          {orderItem.quantity} items
        </td>

        <td class="px-6 py-4 font-serif text-gray-700">
          {orderItem.orders.date_created}
        </td>
        <td class="px-6 py-4 font-serif">
          <p
            onClick={() => ViewProductDetailsHandler(orderItem.id)}
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
          >
            View Details
          </p>
        </td>
      </tr>
    ));

  // -------------------------------- FILTER BY SEARCH HANDLER --------------------------------
  const noOrdersYetMessage = (
    <tr>
      <td colspan="9">
        <div class="flex flex-col justify-center items-center h-32">
          <p className="text-center font-serif text-2xl text-gray-800">
            You have no orders yet.
          </p>
        </div>
      </td>
    </tr>
  );
  const handleSearchOrders = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setVendorOrders(unfilteredVendorOrders);
    } else {
      if (unfilteredVendorOrders.length > 0) {
        const searchedProducts = unfilteredVendorOrders.filter((order) => {
          return (
            order.orders.status
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            order.orders.payment_uid
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            order.order_id == parseInt(searchValue, 10)
          );
        });
        setVendorOrders(searchedProducts);
      }
    }
  };

  // ------------------------------------------ CREATE ORDER HISTORY INTERFACE -------------------------------------

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-6">
      {isOrderDetailsVisible && (
        <VendorApprovedOrderDetails
          selectedOrderDetails={selectedOrderDetails}
          setIsOrderDetailsVisible={setIsOrderDetailsVisible}
          isOrderDetailsVisible={isOrderDetailsVisible}
        />
      )}

      <h1 className="text-center font-serif text-2xl text-green-900 my-6">
        Order History
      </h1>
      <div class="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-green-900 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={handleSearchOrders}
            type="text"
            id="table-search"
            class="block p-2 pl-10 text-sm text-green-700 border border-green-300 rounded-lg w-80 bg-gray-50 focus:ring-green-700 focus:green-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by status, order ID or payment ID"
          />
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-6">
        <thead class="text-xs text-green-900 font-serif uppercase bg-green-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 ">
              ORDER
            </th>
            <th scope="col" class="px-6 py-3">
              STATUS
            </th>
            <th scope="col" class="px-6 py-3">
              AMOUNT
            </th>
            <th scope="col" class="px-6 py-3">
              MPESA ID
            </th>
            <th scope="col" class="px-6 py-3">
              TRANSACTION ID
            </th>
            <th scope="col" class="px-6 py-3">
              DELIVERY TYPE
            </th>
            <th scope="col" class="px-6 py-3">
              NO. OF ITEMS
            </th>
            <th scope="col" class="px-6 py-3">
              ORDER DATE
            </th>
            <th scope="col" class="px-6 py-3">
              DETAILS
            </th>
          </tr>
        </thead>
        {vendorOrders.length < 1 ? (
          noOrdersYetMessage
        ) : (
          <tbody>{orderHistoryList}</tbody>
        )}
      </table>
    </div>
  );
};

export default VendorAllOrders;
