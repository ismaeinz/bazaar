import React, { useState } from "react";
import BannerImg from "../assets/images/Banner.png";
import BannerImg2 from "../assets/images/Banner2.png";
import BannerImg3 from "../assets/images/Banner3.png";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            src={BannerImg}
            alt="Banner"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={BannerImg2}
            alt="Banner"
            className="w-screen h-full object-cover"
          />
          <img
            src={BannerImg3}
            alt="Banner"
            className="w-screen h-full object-cover"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300
          "
          >
            <FaArrowAltCircleLeft size={30} />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300
          "
          >
            <FaArrowAltCircleRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
