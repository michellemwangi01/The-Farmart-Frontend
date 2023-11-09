import React, { useContext, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UserProfile = () => {
  // -------------------------------------------- USE FORM HOOK  --------------------------------------------
  const {
    currentUser,
    jwToken,
    Kenya_counties,
    hostedRoutePrefix,
    localRoutePrefix,
    headers,
  } = useContext(dataContext);
  const { register, reset, handleSubmit } = useForm();

  console.log(currentUser);
  const [formData, setFormData] = useState({
    email: currentUser.email,
    address: currentUser.address,
    email: currentUser.email,
    first_name: currentUser.firstname,
    fullname: currentUser.fullname,
    last_name: currentUser.lastname,
    phone_number: currentUser.phone_number,
    profile_pic: currentUser.profile_pic,
    vendor_id: currentUser.vendor_id,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileUpdate = (data) => {
    console.log(data);

    axios
      .patch(`${hostedRoutePrefix}/users/users`, data, {
        headers,
      })
      .then((res) => {
        currentUser.profile_pic = data.profile_pic;
        currentUser.fullname = data.fullname;
        ProfileSuccessfullyUpdated(
          "Your profile has been updated successfully!",
          "success"
        );
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  // -------------------------------------------- TOAST NOIFICATIONS --------------------------------------------

  const ProfileSuccessfullyUpdated = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  return (
    <div className="bg-gray-800">
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-2xl m-6 px-4 py-8 mx-auto lg:py-16 border rounded-lg border-1 border-solid border-green-900">
          <div className="flex justify-between items-center">
            <h2 class="mb-4 text-xl text-green-900 font-bold  dark:text-white">
              Update User Profile
            </h2>
            <div
              class="flex mx-3 mt-0 text-sm bg-white rounded-full p-1 md:mr-0 focus:ring-4 focus:ring-green-800 dark:focus:ring-green-800 ring-4 ring-green-800 dark:ring-4 dark:ring-green-800"
              className="mr-4"
            >
              <img
                className="rounded-full ring-2 ring-green-700 ring-offset-1 dark:focus:ring-green-800  dark:ring-4 dark:ring-green-800 "
                width="100px"
                height="100px"
                src={currentUser.profile_pic}
                alt=""
              />
            </div>
          </div>

          <form onSubmit={handleSubmit(handleProfileUpdate)} action="#">
            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block  text-green-900 mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullname")}
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-green-900 text-base font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  {...register("first_name")}
                  value={formData.first_name}
                  onChange={handleInputChange}
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2  text-green-900 text-base font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("last_name")}
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required=""
                />
              </div>

              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-green-900 text-base font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  {...register("email")}
                  id="name"
                  class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  required=""
                />
              </div>
              <div>
                <label
                  for="item-weight"
                  class="block mb-2 text-base  text-green-900 font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  {...register("phone_number")}
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  required=""
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="county"
                  class="block mb-2 text- base text-green-900 font-medium text-gray-900 dark:text-white"
                >
                  County
                </label>
                <select
                  {...register("county", {
                    required: "County is required",
                    minLength: {
                      value: 4,
                      message: "Must be Selected",
                    },
                  })}
                  name="county"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {Kenya_counties.map((county) => (
                    <option className="text-lg" key={county} value={county}>
                      {county}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="item-weight"
                  class="block mb-2 text-base  text-green-900 font-medium text-gray-900 dark:text-white"
                >
                  Image URl
                </label>
                <input
                  type="text"
                  {...register("profile_pic")}
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={formData.profile_pic}
                  onChange={handleInputChange}
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <textarea
                  {...register("address")}
                  onChange={handleInputChange}
                  id="description"
                  rows="8"
                  class="block p-2.5 w-full text-base text-green-900 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write a product description here..."
                >
                  {formData.address}
                </textarea>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button
                type="submit"
                class="text-white bg-green-800 hover:bg-green-500 text-base hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
