import React, { useContext } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import ImageSlider from "./ImageSlider";

const Home = () => {
  const { originalProductList, setProducts } = useContext(dataContext);

  const filterProducts = (id) => {
    const filterProduct = originalProductList.filter((product) => {
      return product.category_id === id;
    });
    setProducts(filterProduct);
    console.log(filterProduct);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <ImageSlider></ImageSlider>
    </div>
  );
};

export default Home;
