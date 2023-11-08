import React, { useContext, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/image3.jpg";
const NewProduct = () => {
  const { categories, hostedRoutePrefix, localRoutePrefix, updateProduct } =
    useContext(dataContext);
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
  const handleImageChnge = (e) => {
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

    const data = {
      name: formData.name,
      description: formData.description,
      vendor_id: 1,
      category_id: formData.category_id,
      image: image,
      price: parseInt(formData.price),
    };
    console.log(data);

    fetch(`${localRoutePrefix}/products/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => updateProduct(data))
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
  return (
    <div
      style={{
        ...backgroundStyles,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${backgroundImage})`,
      }}
      class=" min-w-screen min-h-screen  flex items-center justify-center px-5 py-5"
    >
      <form
        style={{
          ...backgroundStyles,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          width: "70%",
          padding: "3rem",
          borderRadius: "25px",
          opacity: 1,
        }}
        className="outline outline-gray-100 m-14 ml-48 p-4 rounded-xl w-2/3 text-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          className="outline outline-green-200 rounded-lg text-green-600"
          type="text"
          id="name"
          name="name"
          placeholder="Name of Product"
          onChange={handleChange}
          value={formData.name}
        />
        <label htmlFor="description">Description</label>
        <input
          className="outline outline-green-200 rounded-lg text-green-600"
          type="text"
          id="description"
          name="description"
          placeholder="Description of product"
          onChange={handleChange}
          value={formData.description}
        />
        <label htmlFor="price">Price</label>
        <input
          className="outline outline-green-200 rounded-lg text-green-600"
          type="number"
          id="price"
          name="price"
          placeholder="Unit Price"
          onChange={handleChange}
          value={formData.price}
        />
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-white text-green-600 rounded-lg outline outline-green-200"
        >
          <option className="hover:bg-white hover:text-green-600 bg-white">
            Select category
          </option>
          {categoriesList}
        </select>
        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          name="image"
          id="name"
          onChange={handleImageChnge}
          className=""
        />
        <p className="font-bold">Image Preview</p>
        <img src={image} alt="image" className=" w-28 h-24 rounded-lg" />
        <button
          className="bg-green-600 justify-self-center hover:bg-green-700"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
