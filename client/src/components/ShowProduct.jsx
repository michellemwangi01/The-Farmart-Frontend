import React, { useContext } from "react";
import ShowProductCard from "./ShowProduct_card";
import { dataContext } from "../contextProvider/DataContextProvider";
import { Link } from "react-router-dom";

const ShowProduct = ()=>{
    const{products}=useContext(dataContext)
    return(<div>
           <div className="flex justify-between">
           <h1 className="m-3 ml-6 text-4xl text-black font-bold"><p1 className="text-green-500 ">FARM</p1><p1>ART</p1></h1>
            <nav className="flex text-2xl text-green-500">
            <Link to="/signup" className="p-4 hover:text-green-700">Sign Up</Link>
            <Link to="/"className="p-4 hover:text-green-700">Back</Link>
            </nav>
           </div>
            <p className="m-8 font-bold text-center text-2xl font-mono">To purchase any product please Sign Up</p>
            <div className="flex m-24 mt-14 flex-wrap">
            {products.map((product)=>{
               return <ShowProductCard key={product.id} product={product}/>
            })}
        </div>
    
        
    </div>);
}

export default ShowProduct