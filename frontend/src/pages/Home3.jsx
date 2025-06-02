import React from 'react';
import { Link } from 'react-router-dom';

const Home3 = () => {
  return (
    <div className="bg-[#0F0F0F] text-[#f4f4f4] min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-500 mb-6 text-center">SustainPlanet Timeline</h1>
        <div className="border-l-4 border-green-500 pl-6 space-y-8">
          <TimelineItem
            title="📊 Sustainability Reports"
            to="/sustainable-report"
            desc="Track corporate progress on sustainability goals."
          />
          <TimelineItem
            title="📰 Climate News"
            to="/news"
            desc="Explore the latest global green developments."
          />
          <TimelineItem
            title="📘 Learn"
            to="/learn"
            desc="Understand climate change, SDGs, and more."
          />
          <TimelineItem
            title="🤖 Chatbot"
            to="/chatbot"
            desc="Get quick answers from our smart assistant."
          />
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ title, to, desc }) => (
  <div className="relative">
    <div className="absolute w-3 h-3 bg-green-500 rounded-full left-[-1.1rem] top-2"></div>
    <h2 className="text-xl font-semibold text-green-300">{title}</h2>
    <p className="text-gray-400">{desc}</p>
    <Link to={to} className="text-green-400 hover:underline mt-2 inline-block">Explore →</Link>
  </div>
);

export default Home3;
