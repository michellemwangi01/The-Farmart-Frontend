import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/imageSlider.css";

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];

const images_web = [
  "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1200667/pexels-photo-1200667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1625385/pexels-photo-1625385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.unsplash.com/photo-1489450278009-822e9be04dff?auto=format&fit=crop&q=80&w=1172&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1621956838481-f8f616950454?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1153756/pexels-photo-1153756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ImageSlider = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images_web.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images_web.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  const backgroundStyles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const shopNowHandler = () => {
    navigate("/login");
  };

  return (
    <div
      className="image-slider"
      style={{
        ...backgroundStyles,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images_web[currentImageIndex]})`,
        height: "50rem",
      }}
      class=" min-w-screen flex"
    >
      <div className="   w-full lg:mx-64 mx-20  justify-center items-center flex flex-wrap">
        <div className="w-2/3 ">
          <h1
            id="LandingpageHeader"
            className="text-white font-bold text-6xl font-serif"
            style={{}}
          >
            Level up your sales at Farmart
          </h1>
          <p className="text-white text-4xl mt-8 font-serif italic">
            Farm Fresh Delights at Your Doorstep - Where Nature Meets
            Convenience! Farmer or local producer, Farmart is your gateway to a
            thriving community of fresh food enthusiasts.
          </p>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <button
            onClick={() => navigate("/products")}
            type="button"
            class="py-3 m-auto mt-4 mx-4 px-12 text-lg rounded-none font-medium text-white-900 focus:outline-none bg-green-900 border border-green-900 hover:bg-green-500 hover:text-white-900 focus:z-10 focus:ring-4 focus:ring-green-900 dark:focus:ring-green-900 dark:bg-green-900 dark:text-green-400 dark:border-greeny-600 dark:hover:text-white dark:hover:bg-green-900"
          >
            SHOP NOW
          </button>
          <button
            onClick={() => navigate("/login")}
            type="button"
            class="py-3 m-auto mt-4  px-12 text-lg rounded-none font-medium text-white-900 focus:outline-none bg-green-900 border border-green-900 hover:bg-green-500 hover:text-white-900 focus:z-10 focus:ring-4 focus:ring-green-900 dark:focus:ring-green-900 dark:bg-green-900 dark:text-green-400 dark:border-greeny-600 dark:hover:text-white dark:hover:bg-green-900"
          >
            SELL NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
