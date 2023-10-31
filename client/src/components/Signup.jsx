import React from "react";
import backgroundImage from "../images/image3.jpg";

const Signup = () => {
  const backgroundStyles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
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
                <span className="text-green-400">Login now.</span>
              </h1>
            </div>
            <div class="w-full md:w-1/2 bg-white py-10 px-5 md:px-10 bg-white-200 ">
              <div class="text-center mb-10">
                <h1 class="font-bold text-3xl text-gray-900">SIGN UP</h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <div class="flex -mx-3">
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-12">
                    <label for="" class="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <button class="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      SIGN UP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
