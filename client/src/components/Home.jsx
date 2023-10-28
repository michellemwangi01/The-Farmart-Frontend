import React, { useContext } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";

const Home = () => {
  const { categories } = useContext(dataContext);

  console.log(categories);

  const categoriesList = categories.map((category) => (
    <img src={`${category.image}`} alt="" key={category.id} />
  ));

  console.log(categoriesList);
  return (
    <div>
      <h1>Home</h1>
      {categoriesList}
    </div>
  );
};

export default Home;
