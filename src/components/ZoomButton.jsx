"use client";
import { useState } from "react";

const ZoomButton =({label})=> {
  const [zoomClass, setZoomClass] = useState("");

  const handleMouseEnter = () => {
    setZoomClass("zoom-in");
  };

  const handleMouseLeave = () => {
    setZoomClass("zoom-out");
  };

  return (
    <button
      className={`zoom-btn cursor-pointer ${zoomClass} text-white bg-[#0859D7] font-semibold rounded-3xl text-lg px-10 py-3 relative overflow-hidden shadow-md transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
     {label}
    </button>
  );
}

export default ZoomButton;
