import React from "react";
import { SiVisa } from "react-icons/si";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { BsPaypal, BsPersonFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-6">
          <h1 className="w-32">Bazaar</h1>
          <p className="text-white text-sm tracking-wide">IsmaeinZ.com</p>
          <SiVisa size={30} />
          <div className="flex gap-4 text-lg text-gray-400">
            <ImGithub
              SiVisa
              size={30}
              className="hover:text-white duration-300 cursor-pointer"
            />
            <FaFacebook
              size={30}
              className="hover:text-white duration-300 cursor-pointer"
            />
            <FaTwitter
              size={30}
              className="hover:text-white duration-300 cursor-pointer"
            />
            <FaInstagram
              size={30}
              className="hover:text-white duration-300 cursor-pointer"
            />
            <FaYoutube
              size={30}
              className="hover:text-white duration-300 cursor-pointer"
            />
            <FaHome
              size={30}
              className="hover:text-white duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us </h2>
          <div className="text-base flex-flex-col gap-2">
            <p>Giza_Egypt</p>
            <p>Mobile : 0101000000</p>
            <p>Phone : 02382000210</p>
            <p>E-Mail :bazaar@bz.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPersonFill />
            </span>
            my account
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPaypal />
            </span>
            checkout
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaHome />
            </span>
            order tracking
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPersonFill />
            </span>
            my account
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="email"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
