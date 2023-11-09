import React, { useContext, useState, useEffect } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  const {
    originalProductList,
    categories,
    localRoutePrefix,

    hostedRoutePrefix,
    jwToken,
    headers,
  } = useContext(dataContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const product = originalProductList.find(
    (product) => product.id === Number(id)
  );

  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    category_id: 0,
    image: product.image,
    price: product.price,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      // Define the allowed image MIME types
      const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];
      // Check if the uploaded file's MIME type is allowed
      if (allowedImageTypes.includes(file.type)) {
        const imageFile = URL.createObjectURL(file);
        setFormData((formData.image = imageFile));
      } else {
        // Display an error message or prevent the upload
        alert("Please upload a valid image file (JPEG, PNG, or GIF).");
        // Optionally, clear the input field
        e.target.value = null;
      }
    }
  };

  const handlePatchRequest = (data) => {
    console.log(product);
    console.log(data);
    const url = `${hostedRoutePrefix}/products/products/${product.id}`;
    axios
      .patch(url, data, { headers })
      .then((response) => {
        console.log("Product updated successfully:", response.data);
        ProductSuccessfullyUpdated(
          `Product #${product.id} has been updated successfully`,
          "success"
        );
        navigate("/shop");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const categoriesList = categories.map((item) => (
    <option
      className="hover:bg-white hover:text-green-600 bg-white"
      key={item.id}
      value={item.name}
    >
      {item.name}
    </option>
  ));

  // -------------------------------------------- TOAST NOIFICATIONS --------------------------------------------

  const ProductSuccessfullyUpdated = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  return (
    <div class=" w-2/6 h-auto m-auto mt-10 flex flex-col items-center justify-center px-5 py-5 shadow-sm shadow-green-500 ">
      <h1 className="font-serif text-gray-700 text-4xl mb-4">
        Editing product #{product.id}
      </h1>
      {/* <div class=" min-w-screen min-h-screen   flex items-center justify-center px-5 py-5"> */}
      <form
        className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 w-full p-5 rounded-lg"
        // className="outline outline-gray-100 m-14 ml-48 p-4 rounded-xl w-2/3 text-white"
        onSubmit={handleSubmit(handlePatchRequest)}
      >
        <div class="sm:col-span-2">
          <label
            htmlFor="image"
            class="block  text-green-900 text-lg font-normal  dark:text-white"
          >
            Click <span className="text-blue-900 underline ">here</span> to
            upload and preview an image of the product.
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
            className="w-full p-2.5 bg-white border h-10 border-gray-300 text-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-primary-600 focus:border-primary-600"
            style={{ display: "none" }}
          />
        </div>
        <div class="sm:col-span-2">
          <img
            src={formData.image}
            alt="product image"
            className=" border border-1 border-green-800 xl:w-2/3 w-2/3 h-30 rounded-lg object-cover"
          />
        </div>
        <div class="sm:col-span-2">
          <label
            htmlFor="name"
            class="block  text-green-900 mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            type="text"
            id="name"
            {...register("name")}
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div class="sm:col-span-2">
          {" "}
          <label
            htmlFor="description"
            class="block  text-green-900 mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            type="text"
            id="description"
            {...register("description")}
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div class="sm:col-span-2">
          <label
            htmlFor="price"
            class="block  text-green-900 mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            type="number"
            id="price"
            {...register("price")}
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div class="sm:col-span-2">
          {" "}
          <label
            htmlFor="category"
            class="block  text-green-900 mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            {...register("category", {
              required: "Category is required",
              minLength: {
                value: 4,
                message: "Must be Selected",
              },
            })}
            name="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            {categoriesList.map((category) => (
              <option className="text-lg" key={category.id}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:col-span-2">
          {" "}
          <button
            className="bg-green-600  rounded-none justify-self-center w-full m-auto mt-6 hover:bg-green-700"
            type="submit"
          >
            UPDATE PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
