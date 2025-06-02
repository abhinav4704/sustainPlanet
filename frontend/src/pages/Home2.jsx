import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import NewsSection from './NewsSection';


const Home2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1e1e1e] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-green-400 mb-4">Welcome to SustainPlanet</h1>
      <p className="text-lg text-gray-300 mb-10 max-w-xl text-center">
        Real news. Real reports. Real learning. Empowering a greener tomorrow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <LinkBox title="Reports" text="Discover company sustainability reports." to="/sustainable-report" />
        <LinkBox title="News" text="Catch up with global climate news." to="/news" />
        <LinkBox title="Learn" text="Understand sustainable development." to="/learn" />
        <LinkBox title="Chatbot" text="Ask our AI about anything green." to="/chatbot" />
      </div>
     <NewsSection/>

    </div>
  );
};

const LinkBox = ({ title, text, to }) => (
  <Link
    to={to}
    className="bg-[#292f29] hover:bg-[#365336] transition p-6 rounded-lg shadow hover:shadow-green-600/20"
  >
    <h3 className="text-2xl font-semibold text-green-300 mb-2">{title}</h3>
    <p className="text-gray-400">{text}</p>
  </Link>
);

export default Home2;
