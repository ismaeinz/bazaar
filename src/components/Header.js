import React from "react";
import { BsBag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          {/* img */}
          <h1 className="w-20 font-bold">Bazaar</h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold  hover:text-orange-900 hover:underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-900 hover:underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-900 hover:underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-900 hover:underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold  hover:text-orange-900 hover:underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <BsBag size={30} />
            <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
              0
            </span>
          </div>
          {/* img */}
          <div className="w-8 h-8 rounded-full">
            <CgProfile size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
