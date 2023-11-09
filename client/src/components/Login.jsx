import React, { useCallback, useContext, useState } from "react";
import backgroundImage from "../images/image3.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "./AxiosAddJWT";
import { dataContext } from "../contextProvider/DataContextProvider";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  // -------------------------------------------- CUSTOM STYLING --------------------------------------------

  const backgroundStyles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // -------------------------------------------- CREATE STATE & CONTEXT VARIABLES --------------------------------------------
  const [errorMessages, setErrorMessages] = useState("");
  const {
    setIsLoggedIn,
    hostedRoutePrefix,
    localRoutePrefix,
    setCurrentUser,
    currentUser,
    jwToken,
    setJWToken,
  } = useContext(dataContext);
  const navigate = useNavigate();
  // -------------------------------------------- USE FORM HOOK  --------------------------------------------
  const { register, reset, handleSubmit } = useForm();

  // -------------------------------------------- HANDLE LOGIN  --------------------------------------------

  const handleLogin = (data) => {
    console.log(data);
    axios
      .post(`${hostedRoutePrefix}/authorization/login`, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        localStorage.setItem(
          "current_user",
          JSON.stringify(res.data.current_user)
        );
        setJWToken(res.data.access_token);
        setCurrentUser(res.data.current_user);
        setIsLoggedIn(true);
        setIsAuthenticated(true);
        navigate("/products");
        console.log("CURRENT USER ID", res.data.current_user);
      })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(false);
        // setErrorMessages(error.response.data.message);
      });
    reset();
    setErrorMessages("");
  };

  // -------------------------------------------- LOGIN INTERFACE  --------------------------------------------

  return (
    <div
      style={{
        ...backgroundStyles,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${backgroundImage})`,
      }}
      class=" min-w-screen min-h-screen  flex items-center justify-center px-5 py-5"
    >
      <div
        style={{
          ...backgroundStyles,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          width: "70%",
          padding: "3rem",
          borderRadius: "25px",
          opacity: 1,
        }}
        className="flex justify-center"
      >
        <div class=" bg-gray-100 bg-transparent text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
          <div class="md:flex w-full bg-transparent">
            <div class="md:flex md:flex-col md:justify-center bg-transparent hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <h1 className="mb-8 text-white text-4xl mg-auto text-center font-serif italic">
                From farm to market, we've got you covered.
              </h1>
              <h1 className="mt-8 text-white text-xl mg-auto text-center font-serif italic">
                Not yet a farmart user?{" "}
                <Link to="/signup" className="text-green-400">
                  Signup now.
                </Link>
              </h1>
            </div>
            <div class="w-full md:w-1/2 bg-white py-10 px-5 md:px-10 bg-white-200 ">
              <div class="text-center mb-s10">
                <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
                <p>Enter your information to login</p>
              </div>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-sm font-semibold px-1">
                      Username
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register("username")}
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                        placeholder="johnsmith@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-2">
                  <div class="w-full px-3 mb-8">
                    <label for="" class="text-sm font-semibold px-1">
                      Password
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register("password")}
                        type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                        placeholder="************"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <p className="text-md text-red-400 text-center">
                      {errorMessages}
                    </p>
                    <button
                      type="submit"
                      class="block w-full max-w-xs mx-auto bg-green-800 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      LOGIN NOW
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
