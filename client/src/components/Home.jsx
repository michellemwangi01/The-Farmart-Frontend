import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return <div>
   <div>
   <div className="flex justify-between m-6">
      <h1 className="m-3 ml-6 text-4xl"><p1 className="text-green-600 ">FARM</p1><p1>ART</p1></h1>
      <NavBar/>      
    </div >
    <div className="flex justify-between w-2/3 ml-6 ">
     <div className="w-80">
     <h1 className="text-4xl">Let's Level Up Your <p className="text-green-600">Sales</p></h1>
      <p className="text-lg mt-2">We help you to grow your sales by providing the best digital marketing solutions.</p>
     </div>
      <Link to="/Signup" className="rounded-xl bg-green-600 w-26 h-10 justify-center p-2 ">SHOP NOW</Link>
    </div>
   </div>
   <div>
    <h1 className="m-6">Shop By Category</h1>
    <div className="flex flex-wrap justify-between m-6">
      <div className="border-solid rounded-xl border-red-600 bg-green-500 w-96 h-48 m-2">
        <h1 className=" bg-white mt-32 p-1 flex w-32 ml-2">Live Animals <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</h1>
      </div>
      <div className="bg-blue-500 w-96 h-48 m-2">
        <h1 className="border bg-white mt-32 p-1 flex w-32 ml-2">Live Animals<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</h1>
      </div>
      <div className="bg-blue-500 w-96 h-48 m-2">
        <h1 className="border bg-white mt-32 p-1 flex w-32 ml-2">Live Animals<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</h1>
      </div>
      <div className="bg-blue-500 w-96 h-48 m-2 ">
        <h1 className="border bg-white mt-32 p-1 flex w-32 ml-2">Live Animals<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</h1>
      </div>
      <div className="bg-blue-500 w-96 h-48 m-2">
        <h1 className="border bg-white mt-32 p-1 flex w-32 ml-2">Live Animals<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</h1>
      </div>
      <div className="bg-blue-500 w-96 h-48 m-2">
        <h1 className="border bg-white mt-32 p-1 flex w-32 ml-2">Live Animals<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</h1>
      </div>
    </div>
   </div>
   <div>
    <h1 className="m-6">Upcoming Farm-Mart Services</h1>
    <div>
      <div>
        Livestock Management
      </div>
      <div>
        Crop Planning and Management
      </div>
      <div>
        Financial Services
      </div>
      <div>
        Inventory Management
      </div>
    </div>
   </div>
  </div>;
};

export default Home;
