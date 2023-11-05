import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/imageSlider.css";

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];

const ImageSlider = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // 3000 milliseconds (3 seconds)

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentImageIndex]})`,
        height: "50rem",
      }}
      class=" min-w-screen flex"
    >
      <div className="  flex w-full lg:mx-64 mx-20  justify-center items-center">
        <div className="w-2/3">
          <h1
            id="LandingpageHeader"
            className="text-white font-bold text-6xl font-serif"
            style={{}}
          >
            Level up your sales at Farmart
          </h1>
          <p className="text-white text-4xl mt-4 font-serif">
            Farm Fresh Delights at Your Doorstep - Where Nature Meets
            Convenience!
          </p>
        </div>
        <div className="w-1/3">
          <button
            onClick={shopNowHandler}
            type="button"
            class="py-3 m-auto px-12 text-lg rounded-none font-medium text-white-900 focus:outline-none bg-green-900 border border-green-900 hover:bg-green-500 hover:text-white-900 focus:z-10 focus:ring-4 focus:ring-green-900 dark:focus:ring-green-900 dark:bg-green-900 dark:text-green-400 dark:border-greeny-600 dark:hover:text-white dark:hover:bg-green-900"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
