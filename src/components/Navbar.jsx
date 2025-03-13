import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { linkData } from "../assets/data";

const Navbar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleAddNewEvent = () => {
    navigate("/events/add-event");
  };

  return (
    <header className="flex items-center justify-evenly fixed top-0 left-0 w-full shadow-md bg-white z-10 p-4">
      <div className="logoDiv">
        <a href="#" className="logo flex">
          <h1 className="text-xl font-bold">Communication Hub</h1>
        </a>
      </div>

      <div className="hidden md:flex gap-6">
        {linkData.map((item, index) =>
          item.subOptions ? (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span className="px-3 py-2 rounded-full text-gray-800 text-base hover:text-[#2564ed] cursor-pointer">
                {item.label}
              </span>
              {openDropdown === index && (
                <div className="absolute left-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black/5 z-20">
                  {item.subOptions.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.link}
                      className="block text-base px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={index}
              to={item.link}
              className="px-3 rounded-full text-gray-800 text-base hover:text-[#2564ed]"
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      <div className="hidden md:flex">
        <button
          onClick={handleAddNewEvent}
          className="flex justify-center items-center cursor-pointer gap-2 font-semibold bg-gradient-to-r from-[hsl(187,85%,43%)] to-[hsl(199,100%,33%)] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-md"
        >
          <IoMdAdd className="text-lg" /> Add Event
        </button>
      </div>

      <div className="md:hidden">
        <Popover>
          <PopoverButton className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <BsThreeDotsVertical className="text-2xl text-gray-700" />
          </PopoverButton>
          <PopoverPanel className="absolute right-4 top-16 w-48 bg-white shadow-xl rounded-xl p-2 z-20 ring-1 ring-black/5">
            {/* Links */}
            {linkData.map((item, index) => (
              <div key={index} className="mb-1">
                {item.subOptions ? (
                  <div className="relative">
                    <span className="block px-5 text-gray-800 text-base font-medium hover:bg-gray-100 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer">
                      {item.label}
                    </span>
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subOptions.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className="block text-sm px-4 py-1 text-gray-700 font-medium hover:bg-gray-200 transition duration-200 rounded-md"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className="block px-5 py-1 text-gray-800 text-base font-medium  hover:bg-gray-100 transition-colors duration-300 ease-in-out rounded-lg"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </PopoverPanel>
        </Popover>
      </div>
    </header>
  );
};

export default Navbar;
