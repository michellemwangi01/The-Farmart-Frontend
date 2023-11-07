import React, { useContext } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import ImageSlider from "./ImageSlider";

const Home = () => {
  return (
    <div>
      <ImageSlider></ImageSlider>
    </div>
  );
};

export default Home;
