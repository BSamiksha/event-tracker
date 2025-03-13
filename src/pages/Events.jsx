import React, { useState } from "react";
import { PiSparkle } from "react-icons/pi";
import EventCard from "../components/EventCard";

const Events = ({ upcomingEvents }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredEvents = activeFilter === "All"
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === activeFilter.toLowerCase());

  const categories = ["All", "Religious", "Charity", "Social"];

  return (
    <>
      {/* Header */}
      <div>
        <h2 className="p-6 md:p-10 flex gap-2 text-center text-3xl md:text-4xl font-bold justify-center">
          <PiSparkle className="text-center" />
          UPCOMING EVENTS
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 border rounded-full text-sm font-medium cursor-pointer ${
              activeFilter === category
                ? "bg-gray-200 text-black"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            } transition-all duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div>
          <h3
            data-aos="fade-right"
            className="text-xl md:text-2xl font-bold relative w-max text-[#58585f] my-4 z-2 after:content-[''] after:absolute after:bg-[#10b5cb] after:h-[5px] after:w-[120px] after:right-0 after:bottom-1 after:-z-1"
          >
            Be a part of our upcoming events...
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No events available in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Events;
