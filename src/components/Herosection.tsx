"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur<br />
          Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          The pace of technological change is accelerating. Big players like Microsoft, Amazon, Google, and OpenAI 
          are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, 
          and massive distribution networks. Solopreneurs trained in this program will win by automating work typically 
          outsourced to employees, directly connecting to customers, and developing vertical metaverses, paving the way 
          for the first billion-dollar valued solopreneur businesses.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          This program aims to train a new breed of solopreneurs. These individuals will adopt an ultra-lean business model, 
          working independently without the need for employees or teams.
        </p>

        {/* Images Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Pic1.jpg"
              alt="Money Background"
              width={400}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/pic2.jpg"
              alt="Solopreneur Image"
              width={400}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/pic3.jpg"
              alt="Students Learning"
              width={400}
              height={200}
              className="object-cover"
            />
          </div>
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
  const totalCycles = 4;

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 2) % (images.length * totalCycles);
          return nextIndex >= images.length ? 0 : nextIndex; // Reset to 0 after one full cycle
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div
      className="relative flex justify-center items-center w-full max-w-4xl h-[400px] bg-gray-100 overflow-hidden rounded-2xl mt-12 mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex w-full h-full">
        {/* Display two images side by side */}
        <img
          src={images[currentIndex % images.length]}
          alt={`Slide ${currentIndex}`}
          className="w-1/2 h-full object-cover transition-transform duration-500"
        />
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt={`Slide ${(currentIndex + 1)}`}
          className="w-1/2 h-full object-cover transition-transform duration-500"
        />
      </div>
      <div className="absolute bottom-4 flex justify-center w-full space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex % images.length ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index * 2)}
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
