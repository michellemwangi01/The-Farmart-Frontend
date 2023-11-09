import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../images/image3.jpg";
import { useForm } from "react-hook-form";
import { dataContext } from "../contextProvider/DataContextProvider";
import axios from "axios";

const Signup = () => {
  const backgroundStyles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  // -------------------------------------------- CREATE STATE VARIABLES --------------------------------------------

  const [formValidationMessage, setFormValidationMessage] = useState("");

  // -------------------------------------------- INITIALIZE HOOKS --------------------------------------------

  const { hostedRoutePrefix, localRoutePrefix } = useContext(dataContext);
  const navigate = useNavigate();

  // -------------------------------------------- USE FORM HOOK --------------------------------------------

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // -------------------------------------------- HANDLE SIGN UP --------------------------------------------

  const handleSignup = (data) => {
    console.log(data);
    if (data.password !== data.repeatpassword) {
      setFormValidationMessage("Passwords do not match");
      return;
    }
    const updatedData = { ...data, username: data.first_name + data.last_name };
    console.log(updatedData);
    axios
      .post(
        `${hostedRoutePrefix}/authorization
/signup`,
        updatedData
      )
      .then((res) => {
        console.log(`SUCCESSFUL ${res.data}`);
        navigate("/login");
      })

      .catch((error) => console.log(error));
    reset();
    setFormValidationMessage("");
    navigate("/login");
  };

  // -------------------------------------------- INTERFACE --------------------------------------------

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
          padding: "1rem",
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
                Already a Farmart User?{" "}
                <Link to="/login" className="text-green-400">
                  Login now.
                </Link>
              </h1>
            </div>
            <div class="w-full md:w-1/2 bg-white py-10 px-5 md:px-10 bg-white-200 ">
              <div class="text-center mb-10">
                <h1 class="font-bold text-3xl text-gray-900">SIGN UP</h1>
                <p>Enter your information to register</p>
              </div>
              <form
                className="font-serif"
                onSubmit={handleSubmit(handleSignup)}
              >
                <div class="flex flex-wrap -mx-3">
                  <div class="w-1/2 sm:w-1/2 px-3 mb-5">
                    <label for="" class="text-sm font-serif font-semibold px-2">
                      First name
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register("first_name")}
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 text-gray-900 border-gray-200 outline-none focus:border-green-500"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div class="w-1/2 sm:w-1/2 px-3 mb-5">
                    <label for="" class="text-sm font-semibold px-1">
                      Last name
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register("last_name")}
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 text-gray-900 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-sm font-semibold px-1">
                      Email
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register("email")}
                        type="email"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 text-gray-900 outline-none focus:border-green-500"
                        placeholder="johnsmith@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap lg-flex-no-wrap -mx-3">
                  <div class="w-full md:w-1/2 px-3 md:mb-12 mb-2 ">
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
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 text-gray-900 border-gray-200 outline-none focus:border-green-500"
                        placeholder="************"
                        required
                      />
                    </div>
                    <p className="text-xs text-red-400 italic">
                      {formValidationMessage}
                    </p>
                  </div>
                  <div class="w-full md:w-1/2 px-3 md:mb-12 mb-2">
                    <label for="" class="text-sm font-semibold px-1">
                      Repeat Password
                    </label>
                    <div class="flex ">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register("repeatpassword")}
                        type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 text-gray-900 outline-none focus:border-green-500"
                        placeholder="************"
                        required
                      />
                    </div>
                    <p className="text-xs text-red-400 italic">
                      {formValidationMessage}
                    </p>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <button
                      type="submit"
                      class="block w-full max-w-xs mx-auto bg-green-800 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      SIGN UP NOW
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

export default Signup;
