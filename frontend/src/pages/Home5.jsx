import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-emerald-600 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empower Yourself to Build a Sustainable Future
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Learn, Discuss, and Stay Updated on Sustainable Development Goals (SDGs)
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-emerald-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
            Start Learning
          </button>
          <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition">
            Ask the Chatbot
          </button>
        </div>
      </section>

      {/* Why Sustainability Section */}
      <div className="bg-slate-900 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Sustainability Matters</h2>
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <div>🌍 <strong>17</strong> SDGs to transform our world</div>
          <div>🏭 <strong>75%</strong> of emissions from just 10 countries</div>
          <div>👩‍🏫 <strong>10k+</strong> learners impacted globally</div>
        </div>
      </div>

      {/* Featured Learning Topics */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Popular Learning Topics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Climate Action", "Clean Energy", "No Poverty"].map((topic) => (
            <div
              key={topic}
              className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{topic}</h3>
              <p className="text-sm">
                Learn about {topic.toLowerCase()} and its impact on global sustainability.
              </p>
              <button className="mt-4 text-emerald-400 hover:underline">Learn More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability News */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Sustainability News</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-slate-800 p-6 rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                News Title {i}
              </h3>
              <p className="text-sm text-gray-300">
                A short summary of a recent development in sustainability goes here.
              </p>
              <a className="text-emerald-400 mt-3 inline-block hover:underline" href="#">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">From the Community</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-slate-800 p-4 rounded-xl hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold">User Blog Post {i}</h4>
              <p className="text-sm text-gray-300">
                Discussion or project highlight from a community member.
              </p>
              <button className="mt-3 text-emerald-400 hover:underline">
                Join the Discussion →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 text-center text-sm text-gray-400">
        <p>© 2025 SustainPlanet. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
