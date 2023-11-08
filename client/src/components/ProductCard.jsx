import React, { useState } from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, togglePopup }) => {
  // -------------------------------------------- DEFINE STATE  & CONTEXT VARIABLES --------------------------------------------

  // -------------------------------------------- THE INTERFACE --------------------------------------------

  return (
    <article data-aos="zoom-in" data-aos-once="true">
      <div class="article-wrapper">
        <figure style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <img
            src={product.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </figure>
        <div class="article-body">
          <h2>{product.name}</h2>
          <div className="flex">
            {/* <p className="text-blue-800">Price</p> */}
            <p className="mx-2 text-blue-800" id="cardDetails">
              ksh{" "}
              {product.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <p id="cardDetails"></p>
          <div className="flex mt-1 mb-1 justify-start content-center ">
            <p className="bg-gray-500 p-1 rounded-lg text-sm text-white ">
              {" "}
              Category
            </p>
            <p className="mx-2 mt-1" id="cardDetails">
              {product.category.name}
            </p>
          </div>

          <h6 onClick={() => togglePopup(product.id)} class="read-more">
            View details <span class="sr-only">about this is product</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </h6>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
