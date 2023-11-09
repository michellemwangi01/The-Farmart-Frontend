import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../contextProvider/DataContextProvider";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import JoinOurCommunity from "./JoinOurCommunity";

const Home = () => {
  const { setProducts, products, Number } = useContext(dataContext);

  const filterProducts = (id) => {
    const filterProduct = products.filter((product) => {
      return product.category_id === id;
    });
    setProducts(filterProduct);
    console.log(filterProduct);
  };

  return (
    <div className="  m-0 p-0">
      <div id="imageSlider">
        <ImageSlider></ImageSlider>
      </div>
      <div id="shopByCategory">
        <h1 className="m-6 text-2xl text-black font-bold">Shop By Category</h1>
        <div className="flex  flex-wrap  justify-center m-6 ml-18">
          <div
            className=" live relative rounded-xl  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-60 m-4 "
            data-aos="flip-right"
            // data-aos-once="true"
          >
            <Link
              to="/products"
              className=" absolute bottom-2  bg-white p-1 flex w-auto ml-2 text-black border-0 hover:text-white hover:bg-green-500"
              onClick={() => filterProducts(1)}
            >
              LIVE ANIMALS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div
            className="dairy relative rounded-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-60 m-4"
            data-aos="flip-right"
            // data-aos-once="true"
          >
            <Link
              to="/products"
              className=" absolute bottom-2  bg-white p-1 flex w-auto ml-2 text-black border-0 hover:text-white hover:bg-green-500"
              onClick={() => filterProducts(3)}
            >
              DAIRY PRODUCTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div
            className="meat relative rounded-xlw-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-60 m-4"
            data-aos="flip-right"
            // data-aos-once="true"
          >
            <Link
              to="/products"
              className=" absolute bottom-2  bg-white p-1 flex w-auto ml-2 text-black border-0 hover:text-white hover:bg-green-500"
              onClick={() => filterProducts(2)}
            >
              MEAT & POULTRY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div
            className="grain relative rounded-xl  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-60 m-4 "
            data-aos="flip-right"
            // data-aos-once="true"
          >
            <Link
              to="/products"
              className=" absolute bottom-2  bg-white p-1 flex w-auto ml-2 text-black border-0 hover:text-white hover:bg-green-500"
              onClick={() => filterProducts(7)}
            >
              GRAINS AND CEREALS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div
            className="honey relative rounded-xl  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-60 m-4"
            data-aos="flip-right"
            // data-aos-once="true"
          >
            <Link
              to="/products"
              className=" absolute bottom-2  bg-white p-1 flex w-auto ml-2 text-black border-0 hover:text-white hover:bg-green-500"
              onClick={() => filterProducts(6)}
            >
              HONEY & BEE PRODUCTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
          <div
            className="fresh relative rounded-xl  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-60 m-4"
            data-aos="flip-right"
            // data-aos-once="true"
          >
            <Link
              to="/products"
              className=" absolute bottom-2  bg-white p-1 flex w-auto ml-2 text-black border-0 hover:text-white hover:bg-green-500"
              onClick={() => filterProducts(5)}
            >
              FRESH PRODUCE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <JoinOurCommunity />
      <Footer />
    </div>
  );
};

export default Home;
