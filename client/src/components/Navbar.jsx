import React, { useContext, useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navBarComponent text-lg font-bold"
        style={{ display: "flex", margin: "auto", color: "white" ,font: "bold"}}
      >
        <ul
          id="navLinksContainer"
          style={{ display: "flex", listStyle: "none", margin: "10px" }}
        >
          <li className="navLinks" style={{ marginRight: "10px" }}>
            <NavLink exact to="/aboutus">
              ABOUT US
            </NavLink>
          </li>
          <li className="navLinks" style={{ marginRight: "10px" }}>
            <NavLink exact to="products">
              PRODUCTS
            </NavLink>
          </li>
          <li className="navLinks" style={{ marginRight: "10px" }}>
            <NavLink exact to="vendor">
              VENDOR
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
