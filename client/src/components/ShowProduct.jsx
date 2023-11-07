import React, { useContext } from "react";
import ShowProductCard from "./ShowProduct_card";
import { dataContext } from "../contextProvider/DataContextProvider";
import { Link } from "react-router-dom";

const ShowProduct = ()=>{
    const{products}=useContext(dataContext)
    return(<div>
          
           
            <p className="m-8 font-bold text-center text-2xl font-mono">To purchase any product please Sign Up</p>
            <div className="flex m-24 mt-14 flex-wrap">
            {products.map((product)=>{
               return <ShowProductCard key={product.id} product={product}/>
            })}
        </div>
    
        
    </div>);
}

export default ShowProduct