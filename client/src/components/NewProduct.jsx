import React, { useContext, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewProduct = () => {
  const {
    categories,
    hostedRoutePrefix,
    localRoutePrefix,
    currentUser,
    updateProduct,
  } = useContext(dataContext);
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    vendor_id: "",
    category: "",
    category_id: "", // Changed from "category_id" to "category"

    price: "",
  });
  const backgroundStyles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (name === "category") {
        // Find the corresponding category_id based on the selected category name
        const selectedCategory = categories.find(
          (category) => category.name === value
        );
        return {
          ...prevData,
          [name]: value,
          category_id: selectedCategory ? selectedCategory.id : "",
        };
      } else {
        return { ...prevData, [name]: value };
      }
    });
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
        setImage(imageFile);
      } else {
        // Display an error message or prevent the upload
        alert("Please upload a valid image file (JPEG, PNG, or GIF).");
        // Optionally, clear the input field
        e.target.value = null;
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for missing data
    console.log(formData.category);
    if (
      !formData.name ||
      !formData.description ||
      !formData.category ||
      !image ||
      !formData.price
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    console.log(currentUser);
    const data = {
      name: formData.name,
      description: formData.description,
      vendor_id: 1,
      category_id: formData.category_id,
      image: image,
      price: parseInt(formData.price),
    };
    console.log(data);

    fetch(`${hostedRoutePrefix}/products/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        updateProduct(data);
        NewProductSuccessfullyAdded(
          "You have successfully added a product",
          "success"
        );
      })
      .catch((error) => {
        console.error("Error during POST request:", error);
      });

    setFormData({
      name: "",
      description: "",
      vendor_id: "",
      category: "",
      category_id: "",
      image: "",
      price: "",
    });
    navigate("/shop");
  };
  console.log(categories);

  const categoriesList = categories.map((item) => (
    <option
      className="hover:bg-white hover:text-green-600 bg-white"
      key={item.id}
      value={item.name}
    >
      {item.name}
    </option>
  ));

  categories.map((category) => {
    if (formData.category === category.name) {
      formData.category_id = category.id;
    }
  });

  // -------------------------------------------- TOAST NOIFICATIONS --------------------------------------------

  const NewProductSuccessfullyAdded = (message, type) => {
    toast(message, { autoClose: 3000, type });
  };

  return (
    <div class=" w-2/6 h-auto m-auto mt-6 flex flex-col items-center justify-center px-5 py-5 shadow-sm shadow-green-500 ">
      <h1 className="font-serif text-gray-700 text-4xl mb-4">
        Add New Product
      </h1>
      <form
        className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5 w-full p-5 rounded-lg"
        onSubmit={handleSubmit}
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
            src={image}
            alt="product image"
            className=" border border-1 border-green-800 xl:w-2/3 w-2/3 h-30 rounded-lg object-cover"
          />
        </div>
        <div class="sm:col-span-2">
          <label
            htmlFor="name"
            class="block  text-green-900 mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            type="text"
            id="name"
            name="name"
            placeholder="Name of Product"
            onChange={handleChange}
            value={formData.name}
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
          <textarea
            rows="3"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-green-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            type="text"
            id="description"
            name="description"
            placeholder="Description of product"
            onChange={handleChange}
            value={formData.description}
          />
        </div>
        <div class="sm:col-span-2">
          {" "}
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
            name="price"
            placeholder="Unit Price"
            onChange={handleChange}
            value={formData.price}
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
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option className="hover:bg-white hover:text-green-600 bg-white">
              Select category
            </option>
            {categoriesList}
          </select>
        </div>
        <div className="w-full sm:col-span-2">
          {" "}
          <button
            className="bg-green-600  rounded-none justify-self-center w-full m-auto mt-6 hover:bg-green-700"
            type="submit"
          >
            ADD PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
