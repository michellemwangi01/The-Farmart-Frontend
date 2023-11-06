import React from "react";
import VendorSummaryCards from "./VendorSummaryCards";
import { AiOutlineWarning } from "react-icons/ai";
import { MdProductionQuantityLimits, MdOutlinePayments } from "react-icons/md";
import { NavLink, Link, Outlet } from "react-router-dom";

const VendorDashboard = () => {
  return (
    <div>
      <VendorSummaryCards />
      <nav className="flex justify-center items-center m-12 p-8">
        <Link
          to="vendorneworders"
          class="text-white w-60 font-serif bg-green-900 hover:bg-white hover:text-green-900 active:border-1 active:border-solid active:border-green-900 rounded-none text-xl px-5 py-2.5 text-center inline-flex items-center justify-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-4 mb-4"
        >
          <AiOutlineWarning />
          <span className="ml-2">New Orders</span>
        </Link>
        <Link
          to="allorders"
          class="text-white w-60 font-serif bg-green-900 hover:bg-white hover:text-green-900 hover:border-1 hover:border-solid hover:border-green-900 rounded-none text-xl px-5 py-2.5 text-center inline-flex items-center justify-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-4 mb-4"
        >
          <MdOutlinePayments />
          <span className="ml-2">All Orders</span>
        </Link>
        <Link
          to="vendorproducts"
          class="text-white w-60 font-serif bg-green-900 hover:bg-white hover:text-green-900 hover:border-1 hover:border-solid hover:border-green-900 rounded-none text-xl px-5 py-2.5 text-center inline-flex items-center justify-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-4 mb-4"
        >
          <MdProductionQuantityLimits />
          <span className="ml-2">Your Products</span>
        </Link>{" "}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default VendorDashboard;
