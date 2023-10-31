import React, { useContext, useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { dataContext } from "../contextProvider/DataContextProvider";

const NavBar = () => {
  const handleLogout = () => {
    console.log(currentUser);
  };

  // -------------------------------------------- IMPORT CONTEXT DATA --------------------------------------------
  const { currentUser } = useContext(dataContext);
  return (
    <div>
      <nav
        className="navBarComponent"
        style={{ display: "flex", margin: "auto" }}
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
          <button onClick={handleLogout}>Logout</button>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
