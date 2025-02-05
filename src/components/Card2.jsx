import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function Card2({ name, id, price, image, qty }) {
  return (
    <div className="w-full p-4 shadow-lg flex flex-col sm:flex-row justify-between gap-4">
      {/* Left Section: Image + Item Details */}
      <div className="flex sm:w-[60%] w-full gap-4 sm:gap-6">
        {/* Image */}
        <div className="sm:w-[40%] w-[60%] h-[120px] overflow-hidden rounded-lg">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>

        {/* Item Details */}
        <div className="flex flex-col justify-between w-[60%] sm:w-[50%] gap-3 sm:gap-5">
          <div className="text-lg sm:text-xl text-gray-600 font-semibold">
            {name}
          </div>

          {/* Quantity Control */}
          <div className="w-full h-[50px] sm:h-[60px] bg-slate-200 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-lg sm:text-xl">
            <button className="w-[30%] h-full bg-white text-green-400 hover:bg-gray-200">
              -
            </button>
            <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center">
              {qty}
            </span>
            <button className="w-[30%] h-full bg-white text-green-400 hover:bg-gray-200">
              +
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Price + Delete Icon */}
      <div className="flex flex-col justify-start items-end gap-3 sm:gap-6">
        <span className="text-lg sm:text-xl text-green-400 font-semibold">
          Tk {price}/-
        </span>
        <RiDeleteBinLine className="w-[30px] h-[30px] text-red-400 hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default Card2;
