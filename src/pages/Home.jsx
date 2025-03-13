import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { socials, memberReviews, statsCount } from '../assets/data';

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const exploreEvents = () => {
    navigate('/events/view')
  }

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="text-center py-20 px-4 bg-gray-100">
        <h1
          className="text-5xl font-bold mb-4"
          data-aos="fade-down"
        >
          Connect & Inspire
        </h1>
        <p
          className="text-gray-600 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Empowering communities with meaningful experiences, collaboration, and growth.
        </p>
        <button
          className=" mt-6 px-6 py-2 cursor-pointer text-white bg-blue-500 rounded-full hover:bg-blue-600 transition"
          data-aos="zoom-in"
          onClick={exploreEvents}
        >
          Explore Events
        </button>
      </div>

      <div className="m-10 rounded bg-gradient-to-r from-blue-100 to-blue-500 py-16 mb-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {socials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="m-10 rounded py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsCount.map((item, index) => (
            <div
              key={index}
              className="p-4"
              data-aos="flip-left"
            >
              <h2 className="text-3xl font-bold">{item.stat}</h2>
              <p className="text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="m-10 rounded py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            What Our Members Say...
          </h2>
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-lg"
                data-aos="fade-right"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">Community Member</p>
                  </div>
                </div>
                <p className="text-gray-700">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
