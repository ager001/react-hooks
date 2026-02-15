"use client";
import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState<number>(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 flex items-center space-x-6">
        
        {/* Decrement Button */}
        <button
          onClick={decrementCount}
          className="w-12 h-12 flex items-center justify-center text-xl font-bold 
                     bg-red-500 text-white rounded-full 
                     hover:bg-red-600 active:scale-95 
                     transition transform duration-150"
        >
          −
        </button>

        {/* Count Display */}
        <span className="text-4xl font-bold text-gray-800 w-16 text-center">
          {count}
        </span>

        {/* Increment Button */}
        <button
          onClick={incrementCount}
          className="w-12 h-12 flex items-center justify-center text-xl font-bold 
                     bg-blue-600 text-white rounded-full 
                     hover:bg-blue-700 active:scale-95 
                     transition transform duration-150"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UseState;
