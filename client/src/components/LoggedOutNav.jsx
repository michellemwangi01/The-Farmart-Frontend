import React, { useContext, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { dataContext } from "../contextProvider/DataContextProvider";
import "../styles/Navbar.css";

const LoggedOutNav = () => {
  // -------------------------------------------- IMPORT CONTEXT DATA --------------------------------------------
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const { currentUser, setCurrentUser } = useContext(dataContext);
  const navigate = useNavigate();

  // -------------------------------------------- HANDLE LOGIN --------------------------------------------
  const handleLogin = () => {};
  // -------------------------------------------- USER INTERFACE --------------------------------------------
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 p-0">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-2">
          <a id="FarmartLogo" href="#home" class="flex items-center">
            <span class="self-center text-6xl font-semibold whitespace-nowrap dark:text-white">
              Farmart
            </span>
          </a>

          <ul class="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                activeClassName="active-link"
                className="block font-serif text-lg px-2 py-2 rounded md:bg-transparent font-semibold text-green-700 dark:text-white"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                activeClassName="active-link"
                className="block font-serif text-lg px-2 py-2 rounded md:bg-transparent font-semibold text-green-700 dark:text-white"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LoggedOutNav;
