import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "../styles/ProductCard.css";
import Footer from "./Footer";
import VendorRegistrationForm from "./VendorRegistrationForm";
import { dataContext } from "../contextProvider/DataContextProvider";

const Vendor = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [vendorRegistrationSuccessful, setVendorRegistrationSuccessful] =
    useState(false);
  const { setIsVendor } = useContext(dataContext);

  // ---------------------------- COUNTER ANIMATION COMPONENT --------------------
  function Number({ n }) {
    const step = 10000;
    const { number } = useSpring({
      from: { number: n - 500 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div>
        {number.to((n) => `${Math.round(n).toLocaleString()}+`)}
      </animated.div>
    );
  }

  // ---------------------------- TOGGLE FORM VIEW -------------------------
  const formViewHandler = () => {
    setIsFormVisible(!isFormVisible);
  };
  const navigate = useNavigate();
  const shopNowHandler = () => {
    // navigate
  };

  // const formattedNumber = number.interpolate((value) => value.toLocaleString());
  return (
    <div>
      <div className="m-2 p-4 text-center text-2xl font-serif">
        Farmart Vendors
      </div>
      <div className="flex mx-32 items-center justify-start">
        <div className="w-2/4">
          <p className="text-4xl font-serif my-12">
            Become a Farmart <span className="text-green-700">Vendor.</span>{" "}
          </p>
          <p className="font-serif text-xl my-12">
            Join Farmart today as a farmer vendor and connect your farm products
            directly with your customers for a seamless experience
          </p>
          <div className="flex justify-start my-12 ws-full">
            <a
              href="#vendorRegistrationForm"
              type="button"
              class="py-3 px-12 text-lg  font-serif rounded-none font-medium text-white focus:outline-none bg-green-900 border border-green-900 hover:bg-green-500 hover:text-white-900 focus:z-10 focus:ring-4 focus:ring-green-900 dark:focus:ring-green-900 dark:bg-green-900 dark:text-green-400 dark:border-greeny-600 dark:hover:text-white dark:hover:bg-green-900"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
        <div className="flex justify-center w-2/3">
          <img src="https://farmersfuturefoundation.org/wp-content/uploads/Farmers-Future-Foundation_team-of-Happy-African-Woman-in-Agriculture-1.png" />
        </div>
      </div>
      <div
        className="bg-green-700 w-full px-60 my-4 pb-20"
        style={{ height: "content" }}
      >
        <h1 className="font-serif text-center text-4xl text-white p-4 pt-10">
          Why Choose Farmart
        </h1>
        <div className="flex flex-col flex-wrap xl:flex-nowrap items-center justify-center mt-10 sm:flex-row sm:space-x-4">
          <div className="bg-white m-4 p-4 flex flex-col items-center text-center">
            <svg
              enable-background="new 0 0 48 48"
              height="120px"
              width="120px"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                clip-rule="evenodd"
                d="M33,47H15c-2.209,0-4-1.791-4-4V5c0-2.209,1.791-4,4-4h18c2.209,0,4,1.791,4,4v38  C37,45.209,35.209,47,33,47z M35,5c0-1.104-0.896-2-2-2H15c-1.104,0-2,0.896-2,2v4h22V5z M35,11H13v26h22V11z M35,39H13v4  c0,1.104,0.896,2,2,2h18c1.104,0,2-0.896,2-2V39z M24,44c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2S25.104,44,24,44z M17,14h2  c0.553,0,1,0.448,1,1v2c0,0.552-0.447,1-1,1h-2c-0.553,0-1-0.448-1-1v-2C16,14.448,16.447,14,17,14z M17,21h2c0.553,0,1,0.448,1,1v2  c0,0.553-0.447,1-1,1h-2c-0.553,0-1-0.447-1-1v-2C16,21.448,16.447,21,17,21z M17,28h2c0.553,0,1,0.447,1,1v2c0,0.553-0.447,1-1,1  h-2c-0.553,0-1-0.447-1-1v-2C16,28.447,16.447,28,17,28z M23,14h2c0.553,0,1,0.448,1,1v2c0,0.552-0.447,1-1,1h-2  c-0.553,0-1-0.448-1-1v-2C22,14.448,22.447,14,23,14z M23,21h2c0.553,0,1,0.448,1,1v2c0,0.553-0.447,1-1,1h-2c-0.553,0-1-0.447-1-1  v-2C22,21.448,22.447,21,23,21z M23,28h2c0.553,0,1,0.447,1,1v2c0,0.553-0.447,1-1,1h-2c-0.553,0-1-0.447-1-1v-2  C22,28.447,22.447,28,23,28z M29,14h2c0.553,0,1,0.448,1,1v2c0,0.552-0.447,1-1,1h-2c-0.553,0-1-0.448-1-1v-2  C28,14.448,28.447,14,29,14z M29,21h2c0.553,0,1,0.448,1,1v2c0,0.553-0.447,1-1,1h-2c-0.553,0-1-0.447-1-1v-2  C28,21.448,28.447,21,29,21z M21,5h6c0.553,0,1,0.448,1,1s-0.447,1-1,1h-6c-0.553,0-1-0.448-1-1S20.447,5,21,5z"
                fill-rule="evenodd"
              />
            </svg>
            <p className="font-serif text-2xl font-semibold mt-8">
              Revolutionary Technology Platform
            </p>
            <p className="font-serif text-lg mt-4">
              Experience the power of cutting-edge technology with Farmart's
              platform. Effortlessly showcase your products to thousands of
              vendors who shop on Farmart every day.
            </p>
          </div>

          <div className="bg-white m-4 p-4 flex flex-col items-center text-center">
            <svg
              version="1.1"
              viewBox="0 0 60 52"
              height="120px"
              width="120px"
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fill-rule="evenodd"
                id="People"
                stroke="none"
                stroke-width="1"
              >
                <g
                  fill="green"
                  id="Icon-17"
                  transform="translate(0.000000, -8.000000)"
                >
                  <path
                    d="M40,59 C40,59.552 39.552,60 39,60 L37,60 C36.448,60 36,59.552 36,59 C36,58.448 36.448,58 37,58 L39,58 C39.552,58 40,58.448 40,59 M60,59 C60,59.552 59.552,60 59,60 L43,60 C42.448,60 42,59.552 42,59 C42,58.448 42.448,58 43,58 L59,58 C59.552,58 60,58.448 60,59 M32,59 C32,59.552 31.552,60 31,60 L21,60 C20.448,60 20,59.552 20,59 C20,58.448 20.448,58 21,58 L31,58 C31.552,58 32,58.448 32,59 M16,59 C16,59.552 15.552,60 15,60 L1,60 C0.448,60 0,59.552 0,59 C0,58.448 0.448,58 1,58 L15,58 C15.552,58 16,58.448 16,59 M2,39 C2,38.448 2.448,38 3,38 L5.84,38 L5.417,35.147 C5.336,34.601 5.713,34.092 6.259,34.011 C6.809,33.934 7.315,34.307 7.396,34.853 L7.863,38 L15,38 C15.552,38 16,38.448 16,39 C16,39.552 15.552,40 15,40 L3,40 C2.448,40 2,39.552 2,39 M3,30 L4.559,30 L4.136,27.147 C4.055,26.601 4.432,26.092 4.978,26.011 C5.528,25.935 6.034,26.307 6.114,26.853 L6.582,30 L15,30 C15.552,30 16,30.448 16,31 C16,31.552 15.552,32 15,32 L3,32 C2.448,32 2,31.552 2,31 C2,30.448 2.448,30 3,30 M15,50 C14.449,50 14,49.551 14,49 C14,48.449 14.449,48 15,48 C15.551,48 16,48.449 16,49 C16,49.551 15.551,50 15,50 M15,46 C13.346,46 12,47.346 12,49 C12,50.654 13.346,52 15,52 C16.654,52 18,50.654 18,49 C18,47.346 16.654,46 15,46 M49,50 C48.449,50 48,49.551 48,49 C48,48.449 48.449,48 49,48 C49.551,48 50,48.449 50,49 C50,49.551 49.551,50 49,50 M49,46 C47.346,46 46,47.346 46,49 C46,50.654 47.346,52 49,52 C50.654,52 52,50.654 52,49 C52,47.346 50.654,46 49,46 M49,54 C46.243,54 44,51.757 44,49 C44,46.243 46.243,44 49,44 C51.757,44 54,46.243 54,49 C54,51.757 51.757,54 49,54 M58.707,33.293 L55.966,30.552 L55,19 C55,16.243 52.757,14 50,14 L43,14 C42.448,14 42,14.448 42,15 C42,15.552 42.448,16 43,16 L50,16 C51.626,16 53,17.374 53.003,19.083 L53.913,30 L50.618,30 L51.895,27.447 C52.142,26.953 51.941,26.353 51.447,26.105 C50.952,25.858 50.353,26.059 50.105,26.553 L48.382,30 L43,30 C42.448,30 42,30.448 42,31 C42,31.552 42.448,32 43,32 L54.586,32 L57.293,34.707 C57.863,35.277 57.998,36.588 58,37 L58,48 L55.92,48 C55.433,44.613 52.52,42 49,42 C45.14,42 42,45.14 42,49 C42,52.86 45.14,56 49,56 C52.52,56 55.433,53.387 55.92,50 L59,50 C59.552,50 60,49.552 60,49 L60,37 C60,36.753 59.964,34.549 58.707,33.293 M15,54 C12.243,54 10,51.757 10,49 C10,46.243 12.243,44 15,44 C17.757,44 20,46.243 20,49 C20,51.757 17.757,54 15,54 M39,8 L7,8 C4.243,8 2,10.243 2,13 C2,13.05 2.004,13.099 2.011,13.148 L3.339,22 L1,22 C0.448,22 0,22.448 0,23 C0,23.552 0.448,24 1,24 L15,24 C15.552,24 16,23.552 16,23 C16,22.448 15.552,22 15,22 L5.361,22 L4.001,12.931 C4.038,11.309 5.369,10 7,10 L38,10 L38,48 L21.92,48 C21.433,44.613 18.52,42 15,42 C11.14,42 8,45.14 8,49 C8,52.86 11.14,56 15,56 C18.52,56 21.433,53.387 21.92,50 L39,50 C39.552,50 40,49.552 40,49 L40,9 C40,8.448 39.552,8 39,8"
                    id="truck"
                  />
                </g>
              </g>
            </svg>
            <p className="font-serif text-2xl font-semibold mt-8">
              Last Mile Distribution to Retailers
            </p>
            <p className="font-serif text-lg mt-4">
              Seamless last-mile distribution of your farm products to
              retailers. Connect with a vast network of retailers through
              Farmart to reach your end customers efficiently.
            </p>
          </div>

          <div className="bg-white m-4 p-4 flex flex-col items-center text-center">
            <svg
              enable-background="new 0 0 64 64"
              height="120px"
              width="120px"
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
              viewBox="0 0 64 64"
            >
              <g>
                <path
                  d="M62.37,54.759L42.63,35.015c-2.614-2.614-1.352-4.534-1.352-4.534l-0.012-0.013   c0.873-1.798,0.579-4.015-0.911-5.508l-7.684-7.684c-1.886-1.887-4.944-1.887-6.831,0l-1.174,1.172l-0.125,0.126   c0,0-0.539,1.072,1.918,1.215l0.001,0.003c0,0,1.13,0.096,2.234,1.2l2.72,2.72c0.994,0.993,1.021,2.029,0.975,2.495   c-0.227,1.28-0.817,2.507-1.808,3.495c-0.981,0.984-2.201,1.569-3.471,1.797c-0.563,0.052-1.634-0.045-2.82-1.231l-2.062-2.065   c-1.299-1.299-1.575-2.975-1.575-2.975h-0.003c-0.503-2.279-1.191-1.569-1.191-1.569l-1.3,1.3   c-1.886,1.885-1.886,4.944-0.001,6.831l7.683,7.682c1.57,1.571,3.947,1.814,5.79,0.771l0.014,0.015c0,0,1.691-1.069,3.967,1.209   l20.486,20.489c0,0,2.49,2.445,4.839,0.097l1.938-1.938C63.53,59.383,64.917,57.306,62.37,54.759z"
                  fill="green"
                />
                <path
                  d="M40.965,52.071c-1.226-1.458-3.194-0.554-3.194-0.554l-0.005-0.013c-0.168,0.057-0.333,0.124-0.504,0.177   c-0.054,0.02-0.088,0.042-0.151,0.067c-2.688,0.99-2.713,3.034-2.713,3.034v2.397c-0.038,2.04-1.666,2.398-2.508,2.452h-0.975   c-2.092,0.042-2.467-1.237-2.521-1.921v-2.76c0-2.538-2.833-3.239-2.833-3.239l0.009-0.012c-1.534-0.454-2.985-1.099-4.348-1.873   c-0.057-0.025-0.102-0.04-0.164-0.071c-2.293-1.149-4.002,0.472-4.002,0.472l-1.949,1.949c-1.361,1.356-2.368,0.724-2.737,0.389   l-0.157-0.159l-0.006-0.008h-0.001l-1.601-1.601c-0.001-0.003-0.003-0.003-0.006-0.006c-1.253-1.251,0.377-2.972,0.594-3.189   l1.901-1.899c0.001,0,0.001-0.005,0.001-0.005c1.465-1.465,0.314-3.746,0.314-3.746s0.016-0.003,0.019-0.003   c-0.731-1.328-1.335-2.735-1.766-4.223c-0.014-0.039-0.03-0.064-0.045-0.105c-0.965-2.668-3.399-2.623-3.446-2.623l-1.847,0.008   c-2.162,0.003-2.551-1.402-2.609-2.141l-0.005-1.489c0.013-0.615,0.236-2.355,2.423-2.374c0.001,0,0.001,0,0.001,0l2.367-0.01   c0,0,2.231,0.104,3.023-2.273c0.011-0.03,0.026-0.046,0.036-0.076c0.475-1.751,1.16-3.413,2.05-4.942c0,0,0-0.001,0-0.003   c1.13-2.273-0.484-3.978-0.695-4.185l-1.61-1.608c0,0,0-0.001-0.003-0.004c-1.553-1.553-0.489-2.899-0.12-3.283l0.839-0.839   c0,0,1.77-1.874,3.644,0c0.003,0,0.003,0.001,0.005,0.003l1.83,1.83c0.345,0.327,1.753,1.472,3.773,0.491   c0.008-0.003,0.011-0.003,0.018-0.006c1.3-0.736,2.698-1.314,4.153-1.758c0.039-0.016,0.06-0.035,0.104-0.053   c2.344-0.921,2.781-2.366,2.846-3.113V6.441c0.013-0.457,0.188-2.256,2.289-2.256h1.314c0,0,2.397-0.08,2.397,2.589v2.062   c0.013,0.588,0.218,2.547,2.478,3.344c0.004,0.001,0.004,0.003,0.01,0.005c1.368,0.377,2.673,0.907,3.911,1.547l0.013-0.011   c0,0,2.82,1.75,4.949-0.377l1.424-1.424c0.066-0.066,1.993-1.932,3.434-0.491c0.003,0.001,0.006,0.003,0.006,0.006l1.18,1.177   c0,0,1.431,1.742-0.371,3.545l-1.595,1.595c0,0-1.663,1.704-0.455,4.286c0.021,0.045,0.021,0.072,0.04,0.116   c0.736,1.341,1.317,2.776,1.745,4.279c0.004-0.003,0.02-0.016,0.02-0.016s0.516,2.59,2.826,2.584l2.242-0.01h0.06h0.101   c0.065-0.001,2.738-0.044,2.744,2.481l0.007,1.061v0.003v0.261c-0.022,0.625-0.32,2.187-2.805,2.196l-2.15,0.007   c-1.681,0.016-2.517,1.393-2.885,2.269c-0.14,0.383-0.467,1.625,0.719,2.792l0.305,0.3c0.006,0.005,0.01,0.008,0.014,0.013   c1.772,1.9,3.037-0.761,3.037-0.761c0.804-1.336,1.979-1.604,2.608-1.647h3.279c0.997,0,1.805-0.807,1.805-1.805v-8.325   c0-0.995-0.808-1.805-1.805-1.805h-3.128c-2.453,0-3.072-2.276-3.072-2.276s-0.016,0.004-0.021,0.006   c-0.365-1.05-0.78-2.079-1.277-3.061c0-0.003,0-0.005-0.003-0.008c-0.827-1.82,0.724-3.371,0.809-3.452l1.996-2   c0.704-0.705,0.704-1.847,0-2.553l-5.886-5.886c-0.707-0.704-1.849-0.703-2.553,0.001L46.7,8.25   c-2.264,2.278-4.387,1.178-4.387,1.178l-0.003,0.006c-0.814-0.39-1.647-0.742-2.503-1.047c-0.04-0.019-0.068-0.036-0.109-0.053   c-1.893-0.775-2.142-2.715-2.166-3.501V2.734c0-0.997-0.809-1.805-1.805-1.805h-8.665c-0.995,0-1.805,0.808-1.805,1.805v2.609   c0,2.613-2.21,3.009-2.21,3.009l0.013,0.013c-0.956,0.341-1.893,0.722-2.795,1.17c-0.016,0.006-0.025,0.003-0.041,0.009   c-1.802,0.798-2.798,0.016-3.051-0.229l-0.062-0.062l-0.009-0.011h-0.001L14.66,6.796c-0.706-0.704-1.849-0.704-2.553-0.003   l-5.892,5.884c-0.704,0.706-0.706,1.847,0,2.552l1.956,1.958c0,0,1.696,1.635,0.855,3.471c0,0.003,0,0.003,0,0.003   c-0.487,0.957-0.896,1.958-1.258,2.98c-0.025,0.053-0.049,0.094-0.074,0.156c-0.75,1.831-2.143,2.18-2.888,2.234H1.96   c-0.997,0-1.805,0.81-1.805,1.805v8.325c0,0.998,0.808,1.805,1.805,1.805h3.24c1.833,0,2.315,1.691,2.315,1.691   s0.013-0.031,0.021-0.046c0.375,1.167,0.803,2.31,1.336,3.395c-0.001,0-0.011,0.005-0.011,0.005s1.145,1.941-0.138,3.224v0.003   l-2.519,2.518c-0.704,0.704-0.704,1.85,0,2.551l5.887,5.886c0.706,0.706,1.847,0.706,2.551,0l2.266-2.262l0.005-0.007l0.101-0.099   c0.311-0.296,1.402-1.101,3.507-0.232c0.022,0.011,0.035,0.014,0.055,0.021c0.803,0.38,1.629,0.726,2.475,1.023l-0.01,0.009   c0,0,2.217,0.66,2.217,2.887v2.732c0,0.998,0.81,1.805,1.805,1.805h8.665c0.996,0,1.805-0.807,1.805-1.805v-2.992   c0.04-0.66,0.333-1.906,1.886-2.517c0.06-0.025,0.098-0.046,0.145-0.067c0.6-0.209,1.176-0.464,1.756-0.712   c1.401-0.778,0.102-2.364,0.102-2.364L40.965,52.071z"
                  fill="green"
                />
              </g>
            </svg>
            <p className="font-serif text-2xl font-semibold mt-8">
              Tools to grow your business
            </p>
            <p className="font-serif text-lg mt-4">
              Empower your agricultural business with powerful tools and
              resources. Leverage Farmart's suite of tools to expand your reach
              and enhance your business growth.
            </p>
          </div>
        </div>
      </div>
      <div id="vendorRegistrationForm" className="p-4 m-4">
        <button
          onClick={formViewHandler}
          className="rounded-none bg-green-900 mt-6 font-serif hover:border-1 hover:border-solid hover:border-green-900 text-white m-auto hover:bg-white hover:text-green-900"
        >
          VENDOR REGISTRATION FORM
        </button>
        <p className="text-center text-xl font-serif text-gray-800 p-8">
          {" "}
          Fill in the form to register as a vendor.
        </p>
        {isFormVisible && (
          <VendorRegistrationForm
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
            setVendorRegistrationSuccessful={setVendorRegistrationSuccessful}
          />
        )}

        {vendorRegistrationSuccessful && (
          <div
            onClick={() => {
              navigate("/vendorhome");
            }}
            class="w-full flex justify-center items-center cursor-pointer"
          >
            <p class="font-serif text-center text-2xl">
              You have successfully registered as a Farmart Vendor. Click{" "}
              <span className="text-blue-600  italic">here</span> to start
              selling!
            </p>
          </div>
        )}
      </div>

      <div className="bg-gray-200  pb-8">
        <div>
          <h1 className="text-2xl py-6 font-serif text-center">
            JOIN OUR COMMUNITY
          </h1>
        </div>
        <div
          id="statistics"
          className=" flex flex-wrap justify-center items-center w-full"
        >
          <div className="bg-white flex flex-col border border-1 border-solid border-green-700 justify-center items-center p-10 m-4 rounded-lg text-center shadow-lg">
            <img
              className="object-contain h-40"
              src="data:image/png;base64,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"
              alt="Vendors"
            />
            <p className="font-serif text-2xl font-semibold text-green-700 text-center">
              <Number n={140000} />
            </p>
            <p className="font-serif text-2xl font-bold text-center text-green-700">
              Vendors
            </p>
          </div>
          <div className="bg-white flex flex-col border border-1 border-solid border-green-700 justify-center items-center p-10 m-4 rounded-lg text-center shadow-lg">
            <img
              className="object-contain h-40"
              src="data:image/png;base64,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"
              alt="Vendors"
            />
            <p className="font-serif text-2xl font-semibold text-green-700 text-center">
              <Number n={12000} />
            </p>
            <p className="font-serif text-2xl font-bold text-center text-green-700">
              Deliveries
            </p>
          </div>
          <div className="bg-white flex flex-col border border-1 border-solid border-green-700 justify-center items-center p-10 m-4 rounded-lg text-center shadow-lg">
            <img
              className="object-contain h-40"
              src="data:image/png;base64,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"
              alt="Vendors"
            />
            <p className="font-serif text-2xl font-semibold text-green-700 text-center">
              <Number n={1600} />
            </p>
            <p className="font-serif text-2xl font-bold text-center text-green-700">
              Farmers
            </p>
          </div>
          <div className="bg-white flex flex-col border border-1 border-solid border-green-700 justify-center items-center p-10 m-4 rounded-lg text-center shadow-lg">
            <img
              className="object-contain h-40"
              src="data:image/png;base64,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"
              alt="Vendors"
            />
            <p className="font-serif text-2xl font-semibold text-green-700 text-center">
              <Number n={1200} />
            </p>
            <p className="font-serif text-2xl font-bold text-center text-green-700">
              Handled Daily
            </p>
          </div>
          <div className="bg-white flex flex-col border border-1 border-solid border-green-700 justify-center items-center p-10 m-4 rounded-lg text-center shadow-lg">
            <img
              className="object-contain h-40"
              src="data:image/png;base64,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"
              alt="Vendors"
            />
            <p className="font-serif text-2xl font-semibold text-green-700 text-center">
              <Number n={180} />
            </p>
            <p className="font-serif text-2xl font-bold text-center text-green-700">
              Employees
            </p>
          </div>
          <div className="bg-white flex flex-col border border-1 border-solid border-green-700 justify-center items-center p-10 m-4 rounded-lg text-center shadow-lg">
            <img
              className="object-contain h-40"
              src="data:image/png;base64,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"
              alt="Vendors"
            />
            <p className="font-serif text-2xl font-semibold text-green-700 text-center">
              <Number n={50} />
            </p>
            <p className="font-serif text-2xl font-bold text-center text-green-700">
              Cities
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vendor;
