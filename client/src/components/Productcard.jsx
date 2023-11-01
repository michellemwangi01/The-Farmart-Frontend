import React from "react";
import { Link } from "react-router-dom";

const Productcard = ({ product }) => {
  console.log(product);
  return (
    <div>
      <img src={product.image} alt="image of product" />
      <h1>{product.name}</h1>
      
      <Link to={`/edit/${product.id}`}>EDIT</Link>
    </div>
  );
};

export default Productcard;
