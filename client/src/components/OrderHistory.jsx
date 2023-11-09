import React, { useContext, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import OrderDetails from "./OrderDetails";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
  const [filteredOrderHistory, setFilteredOrderHistory] = useState(false);
  const [selectedOrderID, setSelectedOrderID] = useState(0);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const {
    currentUserOrderHistory,
    localRoutePrefix,
    setCurrentUserOrderHistory,
    unfilteredCurrentUserOrderHistory,
  } = useContext(dataContext);

  const navigate = useNavigate();
  // -------------------------------------------- FECTH SELECTED PRODUCT DETAILS  --------------------------------------------
  const ViewProductDetailsHandler = (id) => {
    const selectedOrder = currentUserOrderHistory.filter((selected_order) => {
      return selected_order.id === id;
    });
    setSelectedOrderDetails(selectedOrder[0]);
    setIsOrderDetailsVisible(true);
    console.log(selectedOrder);
  };

  // ------------------------------------------ CREATE ORDER HISTORY LIST -------------------------------------

  const orderHistoryList = currentUserOrderHistory
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
          # {orderItem.id}
        </th>
        <td
          className={`px-6 py-4 font-serif text-black ${
            orderItem.status === "Order Placed"
              ? "bg-gray-500"
              : orderItem.status === "Order Cancelled" ||
                orderItem.status === "Order Rejected"
              ? "bg-red-400"
              : orderItem.status === "In Progress"
              ? "bg-yellow-400"
              : orderItem.status === "Delivered & Paid"
              ? "bg-green-500"
              : orderItem.status === "Payment Received"
              ? "bg-green-500"
              : orderItem.status === "Order Fulfilled"
              ? "bg-green-500"
              : orderItem.status === "Delivery In Progress"
              ? "bg-yellow-500"
              : ""
          }`}
        >
          {orderItem.status ? orderItem.status : "N/A"}
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
          {orderItem.payment_uid.toUpperCase()}
        </td>
        <td class="px-6 py- font-serif text-gray-700">
          {orderItem.delivery_type}
        </td>
        <td class="px-6 py-4 font-serif text-gray-700">
          {orderItem.products.length} items
        </td>

        <td class="px-6 py-4 font-serif text-gray-700">
          {orderItem.date_created}
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

  const handleSearchOrders = (e) => {
    const searchValueLowerCase = e.target.value.toLowerCase();

    const searchedProducts = unfilteredCurrentUserOrderHistory.filter(
      (order) => {
        const stringID = order.id.toString();
        return (
          order.status.toLowerCase().includes(searchValueLowerCase) ||
          order.payment_uid.toLowerCase().includes(searchValueLowerCase) ||
          stringID === searchValueLowerCase
        );
      }
    );
    console.log(searchedProducts);
    setCurrentUserOrderHistory(searchedProducts);
  };

  // ------------------------------------------ CREATE ORDER HISTORY INTERFACE -------------------------------------

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-6">
      {isOrderDetailsVisible && (
        <OrderDetails
          selectedOrderDetails={selectedOrderDetails}
          setIsOrderDetailsVisible={setIsOrderDetailsVisible}
          isOrderDetailsVisible={isOrderDetailsVisible}
        />
      )}

      <h1 className="text-center font-serif text-2xl text-green-900">
        Your Order History
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
        {currentUserOrderHistory.length < 1 ? (
          <tr>
            <td colspan="9">
              <div class="flex flex-col justify-center items-center h-32">
                <p className="text-center font-serif text-2xl text-gray-800">
                  You haven't placed any orders yet.
                </p>
                <button
                  onClick={() => navigate("/products")}
                  type="button"
                  class="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-4 dark:bg-green-600 dark:hover-bg-green-700 dark:focus:ring-green-800"
                >
                  <svg
                    class="w-3.5 h-3.5 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  Place an order
                </button>
              </div>
            </td>
          </tr>
        ) : (
          <tbody>{orderHistoryList}</tbody>
        )}
      </table>
    </div>
  );
};

export default OrderHistory;
