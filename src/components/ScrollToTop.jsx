"use client";

import { useEffect, useState } from "react";

const ScrollToTopWithCircle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    setScrollPercent(scrolled);
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 cursor-pointer transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg width="60" height="60" className="rotate-[-90deg]">
          {/* Background Circle */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="#e5e7eb" // Tailwind gray-200
            strokeWidth="5"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="#0859D7"
            strokeWidth="5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Icon in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0859D7] text-lg">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTopWithCircle;
