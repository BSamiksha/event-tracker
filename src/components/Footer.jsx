import React, { useEffect } from "react";
import logo from "../assets/logo.jpg";
import { FiChevronRight, FiSend } from "react-icons/fi";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const footerLinks = ["Home", "Profile", "Events", "Support"];

  return (
    <section className="w-full relative p-6 md:p-8 bg-gray-900 mt-[40px]">
      <div className="absolute h-full w-full bg-black opacity-40 inset-0"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Top Section */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap items-center justify-between gap-4 md:gap-8 bg-gray-800 rounded-xl p-6 md:p-8"
        >
          <div className="flex flex-col w-full md:w-auto">
            <h2 className="text-white text-lg md:text-xl font-semibold">
              Connect with us
            </h2>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <input
              className="w-full md:w-[300px] p-2 rounded-full border border-white outline-none bg-transparent placeholder-white opacity-50 text-white"
              type="email"
              placeholder="Enter Email"
            />
            <button
              className="flex justify-center cursor-pointer items-center gap-2 font-semibold bg-gradient-to-r from-[hsl(187,85%,43%)] to-[hsl(199,100%,33%)] text-white px-4 py-2 rounded-full text-sm md:text-base"
              type="submit"
            >
              SEND <FiSend className="text-lg" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-6 bg-gray-100 p-6 md:p-8 mt-6 rounded-xl">
          {/* Left Section */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex flex-col gap-4 w-full md:w-1/2"
          >
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <h2 className="text-2xl font-bold text-gray-800">
                COMMUNICATION HUB
              </h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptate eum consectetur necessitatibus vitae eveniet odit vero
              consequuntur reiciendis!
            </p>
            <div className="flex gap-4 mt-2">
              <AiOutlineTwitter className="text-xl cursor-pointer text-gray-700 hover:text-[#0073a8] transition duration-300" />
              <AiFillYoutube className="text-xl cursor-pointer text-gray-700 hover:text-red-500 transition duration-300" />
              <AiFillInstagram className="text-xl cursor-pointer text-gray-700 hover:text-pink-500 transition duration-300" />
            </div>
          </div>

          {/* Right Section */}
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-full md:w-1/2"
          >
            <div>
              <span className="block font-bold text-gray-700 mb-2">
                Company
              </span>
              <ul>
                {footerLinks.map((link, index) => (
                  <li
                    key={index}
                    className="group flex gap-2 items-center text-gray-500 text-sm md:text-base cursor-pointer transition duration-300 ease-in-out hover:text-[#0073a8] hover:translate-x-2"
                  >
                    <FiChevronRight className="text-gray-500 group-hover:text-[#10b5cb]" />
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-6 text-gray-400 text-sm md:text-base">
          © 2025 COMMUNICATION HUB. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
