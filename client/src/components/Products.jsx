import React, { useContext } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import "../styles/ProductCard.css";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products } = useContext(dataContext);
  console.log(products);

  const productsList = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return (
    <div>
      <section class="articles">{productsList}</section>
    </div>
  );
};

export default Products;
