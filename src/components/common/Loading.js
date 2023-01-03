import React from "react";
import waldo from "../../assets/images/waldo.jpg";
export default function Loading() {
  return (
    <div>
      <div className="bg-gray-800 bg-opacity-20 absolute top-0 h-full w-full z-10 flex flex-col justify-center items-center">
        <div className="bg-white w-28 h-40 rounded-xl flex flex-col justify-center items-center">
          <img className="h-20 animate-bounce" src={waldo} alt="Loading" />
          <div className="text-center text-gray-900 text-lg font-bold">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}
