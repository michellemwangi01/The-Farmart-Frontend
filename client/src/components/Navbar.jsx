import React, { useContext, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { dataContext } from "../contextProvider/DataContextProvider";
import "../styles/Navbar.css";

const Navbar = () => {
  // -------------------------------------------- IMPORT CONTEXT DATA --------------------------------------------
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const {
    currentUser,
    setCurrentUser,
    currentUserName,
    setCurrentUserName,
    setCurrentUserEmail,
    currentUserEmail,
  } = useContext(dataContext);
  const navigate = useNavigate();

  // -------------------------------------------- HANDLE LOGOUT --------------------------------------------

  const handleLogout = () => {
    localStorage.removeItem("jwToken");
    setCurrentUserName("");
    setCurrentUser(0);
    setCurrentUserEmail("");
    navigate("/login");
  };

  // -------------------------------------------- NAVBAR DROPDOWN --------------------------------------------
  const toggleShowUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    console.log(showUserMenu);
  };
  const toggleShowMainMenu = () => {
    setShowMainMenu(!showMainMenu);
    console.log(showMainMenu);
  };

  const dropdownMenu = (
    <div
      class={`${
        showUserMenu
          ? "z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-24 right-0"
          : "hidden"
      }`}
      id="user-dropdown"
    >
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">
          {currentUserName}
        </span>
        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
          {currentUserEmail}
        </span>
      </div>
      <ul class="py-2">
        <li>
          <a
            href="#"
            class="flex justify-center block px-4 py-2  text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex justify-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Profile
          </a>
        </li>

        <li onClick={handleLogout}>
          <p class="flex justify-center block px-4 py-2 text-sm text-gray-700 bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">
            Sign out
          </p>
        </li>
      </ul>
    </div>
  );

  // -------------------------------------------- USER INTERFACE --------------------------------------------
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-8">
          <a id="FarmartLogo" href="#home" class="flex items-center">
            {/* <img src="" class="h-8 mr-3" alt="Farmart Logo" /> */}
            <span class="self-center text-6xl font-semibold whitespace-nowrap dark:text-white">
              Farmart
            </span>
          </a>
          <div class="flex items-center md:order-2">
            <button
              onClick={toggleShowUserMenu}
              type="button"
              class="flex mr-3 mt-0 text-sm bg-white rounded-full p-1 md:mr-0 focus:ring-4 focus:ring-green-800 dark:focus:ring-green-800 ring-4 ring-green-800 dark:ring-4 dark:ring-green-800"
              id="user-menu-button"
            >
              <img
                class="w-12 h-12 rounded-full"
                // src="/docs/images/people/profile-picture-3.jpg"
                src="data:image/jpeg;base64,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"
                alt="photo"
              />
            </button>
            {/* <!-- User menu --> */}
            {showUserMenu && dropdownMenu}
            <button
              onClick={toggleShowMainMenu}
              data-collapse-toggle="navbar-user"
              type="button"
              class="inline-flex items-center mt-0 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                class="w-14 h-14 p-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* <!-- Main menu --> */}
          <div
            class={`${
              showMainMenu
                ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
                : " hidden"
            }`}
            id="navbar-user"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  activeClassName="active-link"
                  className="block font-serif text-lg px-2 py-2 rounded md:bg-transparent md:text-black"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/aboutus"
                  className="block font-serif text-lg px-2 py-2 rounded md:bg-transparent md:text-black"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="products"
                  className="block font-serif text-lg px-2 py-2 rounded md:bg-transparent md:text-black"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="vendor"
                  className="block font-serif text-lg px-2 py-2 rounded md:bg-transparent md:text-black"
                >
                  Vendor
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="contacts"
                  className="block font-serif text-lg px-2 py-2 rounded md:bg-transparent md:text-black"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
