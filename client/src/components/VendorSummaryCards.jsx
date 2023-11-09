import React, { useContext, useState, useEffect } from "react";

import { dataContext } from "../contextProvider/DataContextProvider";

const VendorSummaryCards = () => {
  const { currentVendorProducts, vendorOrders } = useContext(dataContext);
  const [percentagePaidFor, setPercentagePaidFor] = useState(0);

  // --------------------------- SUMMARY CARD CALCULATIONS --------------------------

  const numberOfOrdersPaidFor = vendorOrders.filter(
    (order) => order.orders.status === "Payment Received"
  ).length;

  useEffect(() => {
    if (vendorOrders.length > 0) {
      setPercentagePaidFor(
        () => (numberOfOrdersPaidFor / vendorOrders.length) * 100
      );
    }
  });

  const totalIncome = vendorOrders.reduce(
    (accumulator, order) => accumulator + order.amount,
    0
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {/* ------------------------------------ */}
      <div className="rounded-sm bg-white py-6 px-7 shadow-xl dark:border-strokedark dark:bg-boxdark">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-meta-4">
          <img
            src="data:image/png;base64,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"
            alt="Your Image"
          />
        </div>

        <div className="flex items-end justify-between mt-4 font-serif">
          <div>
            <h4 className="text-title-md font-bold text-gray-800 dark:text-white">
              {vendorOrders.length}
            </h4>
            <span className=" font-medium text-green-900 text-2xl">
              Total Orders
            </span>
          </div>

          <span className="flex items-center gap-1 justify-center text-sm bg-gray-200 pl-2 p-1 rounded-md font-medium text-meta-3 pr-4">
            0.22%
            <svg
              className="fill-meta-3"
              width="16"
              height="12"
              viewBox="0 0 10 11"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          </span>
        </div>
      </div>

      {/* ------------------------------------ */}
      <div className="rounded-sm bg-white py-6 px-7 shadow-xl dark:border-strokedark dark:bg-boxdark">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-meta-4">
          <img
            src="data:image/png;base64,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"
            alt="Your Image"
          />
        </div>

        <div className="flex items-end justify-between mt-4 font-serif">
          <div>
            <h4 className="text-title-md font-bold text-gray-800 dark:text-white">
              {currentVendorProducts.length}
            </h4>
            <span className=" font-medium text-green-900 text-2xl">
              Total Products
            </span>
          </div>

          <span className="flex items-center gap-1 justify-center text-sm bg-gray-200 pl-2 p-1 rounded-md font-medium text-meta-3 pr-4">
            0.13%
            <svg
              className="fill-meta-3"
              width="16"
              height="12"
              viewBox="0 0 10 11"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          </span>
        </div>
      </div>

      {/* ------------------------------------ */}
      <div className="rounded-sm bg-white py-6 px-7 shadow-xl dark:border-strokedark dark:bg-boxdark">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-meta-4">
          <img
            src="data:image/png;base64,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"
            alt="Your Image"
          />
        </div>

        <div className="flex items-end justify-between mt-4 font-serif">
          <div>
            <h4 className="text-title-md font-bold text-gray-800 dark:text-white">
              {percentagePaidFor.toFixed(2)}% ( {numberOfOrdersPaidFor} out of{" "}
              {vendorOrders.length})
            </h4>
            <span className=" font-medium text-green-900 text-2xl">
              Total Payments
            </span>
          </div>

          <span className="flex items-center gap-1 justify-center text-sm bg-gray-200 pl-2 p-1 rounded-md font-medium text-meta-3 pr-4">
            1.97%
            <svg
              className="fill-meta-3"
              width="16"
              height="12"
              viewBox="0 0 10 11"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          </span>
        </div>
      </div>

      {/* ------------------------------------ */}
      <div className="rounded-sm bg-white py-6 px-7 shadow-xl dark:border-strokedark dark:bg-boxdark">
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-meta-4">
          <img
            src="data:image/png;base64,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"
            alt="Your Image"
          />
        </div>

        <div className="flex items-end justify-between mt-4 font-serif">
          <div>
            <h4 className="text-title-md font-bold text-gray-800 dark:text-white">
              ksh{" "}
              {totalIncome.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </h4>
            <span className=" font-medium text-green-900 text-2xl">
              Total Income
            </span>
          </div>

          <span className="flex items-center gap-1 justify-center text-sm bg-gray-200 pl-2 p-1 rounded-md font-medium text-meta-3 pr-4">
            10.72%
            <svg
              className="fill-meta-3"
              width="16"
              height="12"
              viewBox="0 0 10 11"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VendorSummaryCards;
