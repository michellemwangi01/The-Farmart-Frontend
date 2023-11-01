import React, { useContext, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { dataContext } from "../contextProvider/DataContextProvider";

const NavBar = () => {
  // -------------------------------------------- IMPORT CONTEXT DATA --------------------------------------------

  const { currentUser, setCurrentUser, currentUserName, setCurrentUserName } =
    useContext(dataContext);
  const navigate = useNavigate();

  // -------------------------------------------- HANDLE LOGOUT --------------------------------------------

  const handleLogout = () => {
    localStorage.removeItem("jwToken");
    setCurrentUserName("");
    setCurrentUser(0);
    navigate("/login");
  };
  // console.log(`Current User: ${currentUserName}`);
  // -------------------------------------------- USER INTERFACE --------------------------------------------
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
          <li className="navLinks" style={{ marginRight: "10px" }}>
            <NavLink exact to="checkout">
              CHECKOUT
            </NavLink>
          </li>
          <button onClick={handleLogout}>Logout</button>
        </ul>
        <p>Welcome, {currentUserName}</p>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
