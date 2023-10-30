import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import { useForm } from "react-hook-form";

const ProductsSearchFilter = ({}) => {
  // ---------------- DEFINE STATE VARIABLES
  const [searchValue, setSearchValue] = useState("");

  // ---------------- CREATE HOOK OBJECTS
  const { categories, setProducts, products, originalProductList } =
    useContext(dataContext);

  // ---------------- REACT FORM HOOOK
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ---------------- FILTER BY SEARCH HANDLER
  const submitSearchInput = (data) => {
    const searchedProducts = products.filter((product) => {
      const searchValueLowerCase = data.searchValue.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchValueLowerCase) ||
        (product.vendor.business_name &&
          product.vendor.business_name
            .toLowerCase()
            .includes(searchValueLowerCase)) ||
        (product.vendor.county &&
          product.vendor.county.toLowerCase().includes(searchValueLowerCase)) ||
        product.category.name.toLowerCase().includes(searchValueLowerCase)
      );
    });

    console.log(searchedProducts.length);
    setProducts(searchedProducts);
  };

  // ---------------- FILTER BY CATEGORY HANDLER
  const filterByProductsHandler = (id = 0) => {
    if (id == 0) {
      setProducts(originalProductList);
    } else {
      const filteredProductsByCategory = originalProductList.filter(
        (product) => {
          return product.category_id === id;
        }
      );

      console.log(filteredProductsByCategory.length);
      setProducts(filteredProductsByCategory);
    }
  };

  // ---------------- DISPLAY CATEGORY BUTTONS
  const categoriesList = categories.map((category) => (
    <button
      key={category.id}
      onClick={() => filterByProductsHandler(category.id, category.name)}
      type="button"
      className="py-2.5 px-5 mr-2 mb-2 text-base  font-base focus:outline-none border bg-gray-100 hover:bg-green-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-green-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-green-700
      light:text-gray-400 dark:border-green-700 dark:hover:text-white
      dark:hover:bg-green-700"
    >
      {category.name}
    </button>
  ));

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitSearchInput)}
        class="flex items-center"
      >
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            {...register("searchValue", {
              minLength: {
                value: 2,
                message: "Search value must be a minimium of 2 chars",
              },
            })}
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-green-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search category, vendor, location name..."
            required
          />
        </div>

        <button
          type="submit"
          class="p-2.5 ml-2 text-sm font-medium text-white light:bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
      <p className="text-xs text-red-700">{errors.searchValue?.message}</p>
      <div>
        <div className="flex flex-col flex-wrap">
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-base  bg-green-600 font-base focus:outline-none border bg-gray-100 hover:bg-green-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-green-600"
          >
            All Products
          </button>
          {categoriesList}
        </div>
      </div>
    </div>
  );
};

export default ProductsSearchFilter;
