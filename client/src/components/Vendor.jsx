import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductCard.css";
import Footer from "./Footer";
import VendorRegistrationForm from "./VendorRegistrationForm";
import { dataContext } from "../contextProvider/DataContextProvider";

const Vendor = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [vendorRegistrationSuccessful, setVendorRegistrationSuccessful] =
    useState(false);
  const { setIsVendor } = useContext(dataContext);

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

      <Footer />
    </div>
  );
};

export default Vendor;
