import React, { useContext, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { dataContext } from "../contextProvider/DataContextProvider";
import "../styles/Navbar.css";

const LoggedInNav = () => {
  // -------------------------------------------- IMPORT CONTEXT DATA --------------------------------------------
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const { currentUser, setCurrentUser, setJWToken } = useContext(dataContext);
  const navigate = useNavigate();

  // -------------------------------------------- HANDLE LOGOUT --------------------------------------------

  const handleLogout = () => {
    localStorage.removeItem("jwToken");
    setJWToken("");
    setCurrentUser({});
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
        <span class="block text-sm text-gray-900 dark:text-white text-center">
          {currentUser.fullname}
        </span>
        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400 text-center">
          {currentUser.email}
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
          <p class="flex justify-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">
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
        <div class=" flex flex-wrap items-center sm:justify-between justify-center mx-auto p-8">
          <a id="FarmartLogo" href="#home" class="flex items-center">
            <span class="self-center text-6xl font-semibold whitespace-nowrap dark:text-white">
              Farmart
            </span>
          </a>
          <div className="flex flex-wrap sm:justify-between justify-center">
            <div class="flex items-center md:order-2">
              <button
                onClick={toggleShowUserMenu}
                type="button"
                class="flex mx-3 mt-0 text-sm bg-white rounded-full p-1 md:mr-0 focus:ring-4 focus:ring-green-800 dark:focus:ring-green-800 ring-4 ring-green-800 dark:ring-4 dark:ring-green-800"
                id="user-menu-button"
              >
                <img
                  class="w-12 h-12 rounded-full"
                  // src="/docs/images/people/profile-picture-3.jpg"
                  src={currentUser.profile_pic}
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
                  : "sm:items-center sm:justify-between sm:w-full sm:flex sm:w-auto sm:order-1 hidden"
              }`}
              id="navbar-user"
            >
              <ul class="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    activeClassName="active-link"
                    className="block border-b   border-green-700  text-white font-serif text-lg px-2 py-2 rounded md:bg-transparent text-white"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/aboutus"
                    className="block border-b   border-green-700  font-serif text-lg px-2 py-2 rounded md:bg-transparent text-white"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="products"
                    className="block border-b   border-green-700  font-serif text-lg px-2 py-2 rounded md:bg-transparent text-white"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="vendor"
                    className="block border-b   border-green-700  font-serif text-lg px-2 py-2 mr-2 rounded md:bg-transparent text-white"
                  >
                    Vendor
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LoggedInNav;
