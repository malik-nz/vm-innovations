"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/assets/carousel-1.jpg",
    title: "Quality Digital Services You Really Need!",
    subtitle:
      "We deliver high-impact digital solutions designed to meet your unique business goals — from stunning websites and powerful mobile apps to secure systems and smart marketing strategies.",
  },
  {
    id: 2,
    image: "/assets/carousel-2.jpg",
    title: "An Innovative IT Solutions Agency",
    subtitle:
      "Blending creativity with code, we design and develop digital experiences that elevate brands, streamline workflows, and drive growth across all platforms.",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="w-full h-full bg-black/60 flex items-center justify-center px-4 py-6 text-white text-center">
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg sm:text-xl md:text-lg lg:text-xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white text-[#0859D7] p-4 sm:p-3 rounded-full z-20 shadow-md hover:bg-[#0859D7] hover:text-white transition-all"
      >
        <i className="fa-solid fa-chevron-left text-3xl sm:text-2xl"></i>
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white text-[#0859D7] p-4 sm:p-3 rounded-full z-20 shadow-md hover:bg-[#0859D7] hover:text-white transition-all"
      >
        <i className="fa-solid fa-chevron-right text-3xl sm:text-2xl"></i>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
              index === current ? "bg-[#0859D7]" : "bg-gray-300"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
}
