import React, { useState } from "react";

const topics = [
  "No Poverty",
  "Zero Hunger",
  "Good Health",
  "Quality Education",
  "Gender Equality",
  "Clean Water",
  "Clean Energy",
  "Decent Work",
  "Industry & Innovation",
  "Climate Action",
];

const Learn = () => {
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white text-black min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Learn About Sustainable Development Goals
        </h1>

        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search a topic..."
            className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Grid of Topics */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTopics.map((topic, index) => (
            <div
              key={index}
              className="border border-black p-6 rounded shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{topic}</h2>
              <p className="text-sm text-gray-700">
                Learn more about {topic.toLowerCase()} and how it contributes to global sustainability.
              </p>
              <button className="mt-4 underline text-black hover:text-gray-600 transition">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
