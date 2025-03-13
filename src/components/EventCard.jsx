import React from "react";
import charity from "../assets/charity1.jpg";
import social from "../assets/social.jpg";
import religious from "../assets/religious.jpg";
import logo from "../assets/logo.jpg";
import { LuArrowUpRight } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";

const categoryImages = {
  charity: charity,
  social: social,
  religious: religious,
};

const EventCard = ({ event }) => {
  return (
    <div
      key={event.id}
      data-aos="fade-up"
      className="grid gap-4 rounded-xl bg-[#e1e1eb] overflow-hidden shadow-md hover:shadow-xl hover:bg-white transition-transform duration-300 ease-in-out hover:scale-105"
    >
      {/* Image Section */}
      <div className="relative h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          src={categoryImages[event.category] || logo}
          alt={event.title}
        />
        {/* Date on top right */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black bg-opacity-75 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-semibold">
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
          })}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Category */}
        <div className="capitalize inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full mb-2">
          {event.category}
        </div>

        {/* Title */}
        <h4 className="text-black font-bold text-lg sm:text-xl md:text-2xl mb-2">
          {event.title}
        </h4>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base line-clamp-2 mb-3">
          {event.description}
        </p>

        {/* Location and Time */}
        <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-md mb-2">
          <HiOutlineLocationMarker className="text-lg" />
          <span>{event.location}</span>
        </div>
        <div className="text-gray-600 text-sm sm:text-md mb-4">
          ⏰ {event.time}
        </div>

        {/* Day and Date */}
        <div className="flex gap-4 text-gray-500 text-xs sm:text-sm font-medium mb-4">
          <span>
            📅{" "}
            {new Date(event.date).toLocaleDateString("en-US", {
              weekday: "long",
            })}
            ,{" "}
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Button */}
        <button className="mt-2 sm:mt-4 flex justify-center cursor-pointer items-center gap-2 font-semibold bg-gradient-to-r from-[hsl(187,85%,43%)] to-[hsl(199,100%,33%)] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-md">
          View Details <LuArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
