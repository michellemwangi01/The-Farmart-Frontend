import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataContext } from "../contextProvider/DataContextProvider";

const VendorRegistrationForm = ({
  setIsFormVisible,
  isFormVisible,
  setVendorRegistrationSuccessful,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { hostedRoutePrefix, localRoutePrefix, currentUser, setIsVendor } =
    useContext(dataContext);
  // ---------------------------- HANDLE VENDOR FORM REGISTRATION -------------------------

  const handleVendorRegistration = (data) => {
    console.log(currentUser);
    const newData = {
      ...data,
      user_id: currentUser.user_id,
      latitude: 0,
      longitude: 0,
    };

    console.log(newData);
    axios.post(`${hostedRoutePrefix}/vendors/vendors`, newData).then((res) => {
      vendorRegistrationSuccessful(
        "Your request for vendor registration is received successfully.",
        "success"
      );
      console.log(res.data);
      setIsFormVisible(false);
      setVendorRegistrationSuccessful(true);
      setIsVendor(true);
      reset();
    });
  };

  // -------------------TOAST NOIFICATIONS

  const vendorRegistrationSuccessful = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  return (
    <div
      id=""
      className="w-2/3 flex justify-center items-center m-auto border border-solid border-1 rounded-lg border-green-900 p-10 "
    >
      <form onSubmit={handleSubmit(handleVendorRegistration)}>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            {...register("fullnames")}
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-normal font-serif font-normal text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full names
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            {...register("business_name")}
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="Business Name"
            class="peer-focus:font-medium absolute text-normal font-serif font-normal text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Business Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            {...register("mobile_number")}
            name="mobile_number"
            id="mobile_number"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-normal font-serif font-normal text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mobile Number
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              {...register("physical_address")}
              id="Physical Address"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="Physical Address"
              class="peer-focus:font-medium absolute text-normal font-serif font-normal text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Physical Address
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              {...register("county")}
              name="County"
              id="County"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="County"
              class="peer-focus:font-medium absolute text-normal font-serif font-normal text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              County
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              {...register("image")}
              id="Image"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-normal font-serif font-normal text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              {...register("email_address")}
              id="Email Address"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="Email Address"
              class="peer-focus:font-medium absolute text-normal font-serif font-normal text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email Address
            </label>
          </div>
        </div>
        <p className="font-serif text-gray-800 text-lg">
          Please select the categories of products you'd like to offer on this
          platform:
        </p>

        <div id="CategorySelector" className="flex flex-wrap">
          <div class="flex items-center justify-center mb-4 mx-4 text-xl ">
            <input
              id="default-checkbox"
              type="checkbox"
              {...register("category")}
              value=" Live Animals"
              class="w-4 h-4   text-green-700 bg-gray-100 border-green-400 rounded focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
            >
              Live Animals
            </label>
          </div>
          <div class="flex items-center mb-4  mx-4">
            <input
              id="default-checkbox"
              type="checkbox"
              {...register("category")}
              value=" Meat & Poultry"
              class="w-4 h-4 text-green-700 bg-gray-100 border-green-400 rounded focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Meat & Poultry
            </label>
          </div>
          <div class="flex items-center mb-4  mx-4">
            <input
              id="default-checkbox"
              type="checkbox"
              {...register("category")}
              value="Dairy Products"
              class="w-4 h-4 text-green-700 bg-gray-100 border-green-400 rounded focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Dairy Products
            </label>
          </div>
          <div class="flex items-center mb-4  mx-4">
            <input
              id="default-checkbox"
              type="checkbox"
              {...register("category")}
              value=" Eggs"
              class="w-4 h-4 text-green-700 bg-gray-100 border-green-400 rounded focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Dairy Products
            </label>
          </div>
          <div class="flex items-center mb-4  mx-4">
            <input
              id="default-checkbox"
              type="checkbox"
              {...register("category")}
              value=" Fresh Produce"
              class="w-4 h-4 text-green-700 bg-gray-100 border-green-400 rounded focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Fresh Produce
            </label>
          </div>
          <div class="flex items-center mb-4  mx-4">
            <input
              id="default-checkbox"
              type="checkbox"
              {...register("category")}
              value="Honey & Bee Products"
              class="w-4 h-4 text-green-700 bg-gray-100 border-green-400 rounded focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Honey & Bee Products
            </label>
          </div>
          <div class="flex items-center mb-4  mx-4">
            <input
              id="default-checkbox"
              type="checkbox"
              {...register("category")}
              value=" Grains & Cereals"
              class="w-4 h-4 text-green-700 bg-gray-100 border-green-400 rounded focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Grains & Cereals
            </label>
          </div>
          <div class="flex items-center mb-4  mx-4">
            <input
              id="default-checkbox"
              type="checkbox"
              {...register("category")}
              value="Fish & Seafood products"
              class="w-4 h-4 text-green-700 bg-gray-100 border-green-400 rounded focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Fish & Seafood products
            </label>
          </div>
          <div class="flex items-center mb-4  mx-4">
            <input
              id="default-checkbox"
              type="checkbox"
              {...register("category")}
              value=" Animal Feed $ Supplements"
              class="w-4 h-4 text-green-700 bg-gray-100 border-green-400 rounded focus:ring-green-700 dark:focus:ring-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Animal Feed $ Supplements
            </label>
          </div>
        </div>
        <div className="flex justify-center m-auto w-full">
          <button
            type="submit"
            class=" text-white bg-green-700 border border-solid border-green-700 rounded-none hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            SUBMIT REGISTRATION DETAILS{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorRegistrationForm;
