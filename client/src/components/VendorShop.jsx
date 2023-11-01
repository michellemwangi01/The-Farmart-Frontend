import React, { useEffect,useState } from "react";
import Productcard from "./Productcard";

const Vendorshop = () => {
  const[products,setProducts]=useState([])

  useEffect(()=>{
    fetch("https://the-farmart-api-flask.onrender.com/products/products")
    .then(resp=>resp.json())
    .then((data)=>{
      setProducts(data)
      console.log(data);
    })
  },[])

  return <div>
    <header>
      <h1>FARM<h1>ART</h1></h1>
      <nav>
        <h1>Products</h1>
      </nav>
    </header>
    <div>
      <div>
        <h1>My Shop</h1>
        <button>All Products</button>
        <button>Live Animals</button>
        <button>Dairy</button>
        <button>Meat</button>
        <button>Cereals and Grains</button>
        <button>Honey and bees products</button>
        <button>Fresh Produce</button>
      </div>
      <div>
        {products.map((product)=>(
          <Productcard key ={product.id} product={product}/>
        ))}
      </div>
    </div>
  </div>;
};

export default Vendorshop;
