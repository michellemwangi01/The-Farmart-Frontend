import React from "react";
import VendorSummaryCards from "./VendorSummaryCards";
import { AiOutlineWarning } from "react-icons/ai";
import { MdProductionQuantityLimits, MdOutlinePayments } from "react-icons/md";
import { NavLink, Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const VendorDashboard = () => {
  return (
    <div>
      <VendorSummaryCards />
      <nav className="flex justify-center items-center  p-8 w-full bg-gray-200">
        {" "}
        <NavLink
          to="vendorneworders"
          className="vendorNav"
          style={{ margin: "1rem" }}
        >
          <AiOutlineWarning />
          <span className="ml-2">New Orders</span>
        </NavLink>
        <NavLink
          to="allorders"
          className="vendorNav"
          style={{ margin: "1rem" }}
        >
          <MdOutlinePayments />
          <span className="ml-2">All Orders</span>
        </NavLink>{" "}
        <NavLink
          to="vendorproducts"
          className="vendorNav"
          style={{ margin: "1rem" }}
        >
          <MdProductionQuantityLimits />
          Your Products
        </NavLink>{" "}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default VendorDashboard;
