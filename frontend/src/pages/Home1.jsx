import React from 'react';
import { Link } from 'react-router-dom';

const Home1 = () => {
  return (
    <div className="bg-[#1B1A17] text-[#e0e0d1] min-h-screen p-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-4">SustainPlanet 🌍</h1>
        <p className="text-lg text-gray-300 mb-6">
          Explore reports, stay updated on climate news, and learn sustainable practices with our interactive chatbot.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "📊 Sustainability Reports", to: "/sustainable-report" },
            { title: "📰 Sustainable News", to: "/news" },
            { title: "📚 Learn Sustainability", to: "/learn" },
            { title: "🤖 Chat with AI", to: "/chatbot" },
          ].map(({ title, to }) => (
            <div key={to} className="bg-[#2a2a2a] rounded-xl p-6 shadow-md hover:shadow-green-500/20 transition">
              <h2 className="text-xl text-green-300 font-semibold mb-2">{title}</h2>
              <p className="text-gray-400">Click below to dive into the topic.</p>
              <Link to={to} className="block mt-3 text-green-400 hover:underline">Explore →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home1;
