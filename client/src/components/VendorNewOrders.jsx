import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorNewOrderDetails from "./VendorNewOrderDetails";
import { useNavigate } from "react-router-dom";

const VendorNewOrders = () => {
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
  const [selectedOrderID, setSelectedOrderID] = useState(0);
  const [unfilteredVendorOrders, setUnfilteredVendorOrders] = useState([]);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [isOrderApproved, setIsOrderApproved] = useState("");

  const {
    localRoutePrefix,
    hostedRoutePrefix,
    headers,
    jwToken,
    vendorOrders,
    setVendorOrders,
  } = useContext(dataContext);

  const navigate = useNavigate();

  // -------------------------------------------- FECTH SELECTED PRODUCT DETAILS  --------------------------------------------

  const ViewProductDetailsHandler = (id) => {
    const selectedOrder = newOrders.filter((selected_order) => {
      return selected_order.id === id;
    });
    setSelectedOrderDetails(selectedOrder[0]);
    setIsOrderDetailsVisible(true);
    console.log(selectedOrder);
  };

  // ------------------------------------------ FILTER ORDERS FOR CURRENT VENDOR -------------------------------------
  useEffect(() => {
    console.log(jwToken);
    axios
      .get(`${hostedRoutePrefix}/orders/vendor_orders`, { headers })
      .then((res) => {
        setVendorOrders(res.data);
        setUnfilteredVendorOrders(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // -------------------------------------------- TOAST NOIFICATIONS --------------------------------------------

  const OrderSuccessfullyAccepted = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  const OrderSuccessfullyRejected = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  // // -------------------------------------------- ACCEPT ORDER HANDLER  --------------------------------------------

  const approveOrderHandlerHome = (id) => {
    axios
      .patch(`${hostedRoutePrefix}/orders/orders/${id}`, {
        status: "Order Approved",
      })
      .then((res) => {
        console.log(res.data);
        setIsOrderApproved(true);
        OrderSuccessfullyAccepted(
          `This order, No #${id} has been approved`,
          "success"
        );
        const selectedOrder = vendorOrders.find((order) => order.id === id);
        console.log(selectedOrder);
        selectedOrder.orders.status = "Order Approved";
      });
  };
  // // -------------------------------------------- REJECT ORDER HANDLER  --------------------------------------------

  const rejectOrderHandlerHome = (id) => {
    axios
      .patch(`${hostedRoutePrefix}/orders/orders/${id}`, {
        status: "Order Rejected",
      })
      .then((res) => {
        console.log(res.data);
        setIsOrderApproved(false);
        OrderSuccessfullyRejected(
          `This order, No #${id} has been rejected`,
          "success"
        );
        const selectedOrder = vendorOrders.find((order) => order.id === id);
        selectedOrder.orders.status = "Order Rejected";
      });
  };

  // ------------------------------------------ FILTER NEW ORDERS FOR CURRENT VENDOR -------------------------------------

  const newOrders = vendorOrders.filter((vendorOrder) => {
    return vendorOrder.orders.status === "Order Placed";
  });
  // ------------------------------------------ CREATE ORDER HISTORY LIST -------------------------------------

  const orderHistoryList = newOrders
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
              class="w-4 h-4 text-blue-600 text-base bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="checkbox-table-search-1" class="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 text-base font-medium text-green-900 font-serif  whitespace-nowrap dark:text-white"
        >
          # {orderItem.order_id}
        </th>
        <td class="px-6 py-4 text-base font-serif text-gray-700">
          {orderItem.orders.status ? orderItem.orders.status : "N/A"}
        </td>
        <td class="px-6 py-4 text-base font-serif text-gray-700">
          {orderItem.orders.payment_uid
            ? orderItem.orders.payment_uid?.toUpperCase()
            : "N/A"}
        </td>
        <td class="px-6 py-4 text-base font-serif text-gray-700">
          {orderItem.orders.delivery_type
            ? orderItem.orders.delivery_type
            : "N/A"}
        </td>
        <td class="px-6 py-4 text-base font-serif text-gray-700">
          {orderItem.quantity} items
        </td>
        <td class="px-6 py-4 text-base font-serif text-gray-700">
          Ksh{" "}
          {orderItem.amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </td>
        <td class="px-6 py-4 text-base font-serif text-gray-700">
          {orderItem.orders.date_created}
        </td>
        <td class="px-6 py-4  text-base font-serif">
          <div className="flex xl:flex-nowrap flex-wrap ">
            <p
              onClick={() => ViewProductDetailsHandler(orderItem.id)}
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer  text-base text-center m-auto"
            >
              View Order Details
            </p>
            <button
              onClick={() => approveOrderHandlerHome(orderItem.id)}
              type="button"
              class=" text-base focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Approve
            </button>
            <button
              onClick={() => rejectOrderHandlerHome(orderItem.id)}
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-base px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Reject
            </button>
          </div>
        </td>
      </tr>
    ));

  // -------------------------------- FILTER BY SEARCH HANDLER --------------------------------

  const handleSearchOrders = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setVendorOrders(unfilteredVendorOrders);
    } else {
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
  };

  // ------------------------------------------ CREATE ORDER HISTORY INTERFACE -------------------------------------

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-6">
      {isOrderDetailsVisible && (
        <VendorNewOrderDetails
          selectedOrderDetails={selectedOrderDetails}
          setIsOrderDetailsVisible={setIsOrderDetailsVisible}
          isOrderDetailsVisible={isOrderDetailsVisible}
          isOrderApproved={isOrderApproved}
          setIsOrderApproved={setIsOrderApproved}
        />
      )}

      <h1 className="text-center my-6 font-serif text-2xl text-green-900">
        Orders Pending Approval
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
              PAYMENT ID
            </th>
            <th scope="col" class="px-6 py-3">
              DELIVERY TYPE
            </th>
            <th scope="col" class="px-6 py-3">
              NO. OF ITEMS
            </th>
            <th scope="col" class="px-6 py-3">
              AMOUNT
            </th>

            <th scope="col" class="px-6 py-3">
              ORDER DATE
            </th>
            <th scope="col" class="px-6 py-3">
              DETAILS
            </th>
          </tr>
        </thead>
        {newOrders.length < 1 ? (
          <tr>
            <td colspan="9">
              <div class="flex flex-col justify-center items-center h-32">
                <p className="text-center font-serif text-2xl text-gray-800">
                  You have no new orders to fulfill.
                </p>
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

export default VendorNewOrders;
