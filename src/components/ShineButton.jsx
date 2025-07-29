'use client';
import { useState } from "react";

const ShineButton = ({ label, onClick }) => {
  const [direction, setDirection] = useState("");

  const handleMouseEnter = () => {
    setDirection("shine-left-to-right");
  };

  const handleMouseLeave = () => {
    setDirection("shine-right-to-left");
  };

  return (
    <button
      onClick={() => onClick?.()}
      type="button"
      className={`shine-btn relative overflow-hidden text-white bg-[#0859D7] hover:bg-blue-800 font-semibold rounded-3xl text-sm px-8 py-2 md:text-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 ${direction}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
};

export default ShineButton;
