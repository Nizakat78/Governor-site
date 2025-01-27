"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Hero Section
const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 text-center md:text-left">
        {/* Title Section */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
          <br />
          Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 text-justify">
          The pace of technological change is accelerating. Big players like Microsoft, Amazon, Google, and OpenAI are winning by
          providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution
          networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, directly
          connecting to customers, and developing vertical metaverses, paving the way for the first billion-dollar valued solopreneur
          businesses.
        </p>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-700 text-justify">
          This program aims to train a new breed of solopreneurs. These individuals will adopt an ultra-lean business model, working
          independently without the need for employees or teams.
        </p>

        {/* Images Section */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {["/Pic1.jpg", "/pic2.jpg", "/pic3.jpg"].map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`Hero Image ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-40 md:h-56"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Carousel Component
const Carousel = () => {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  return (
    <div
      className="relative flex justify-center items-center w-full max-w-6xl h-[200px] sm:h-[300px] md:h-[400px] bg-gray-100 overflow-hidden rounded-lg mt-8 sm:mt-12 mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex w-full h-full gap-2 px-2 sm:gap-4 sm:px-4">
        {/* Display two images side by side */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-1/2 h-full object-cover transition-transform duration-500 rounded-lg"
        />
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt={`Slide ${(currentIndex + 1)}`}
          className="w-1/2 h-full object-cover transition-transform duration-500 rounded-lg"
        />
      </div>
      <div className="absolute bottom-3 sm:bottom-4 flex justify-center w-full space-x-1 sm:space-x-2">
        {images.slice(0, images.length / 2).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex % images.length ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Combined Component
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeroSection />
      <Carousel />
    </div>
  );
};

export default HomePage;
