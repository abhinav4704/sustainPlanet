import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-[#1B1A17] text-[#e0e0d1] min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-400 tracking-wide">
          Welcome to SustainPlanet 🌍
        </h1>
        <p className="text-lg text-[#ccc] mb-6 leading-relaxed">
          Learn, explore, and act on the journey towards a sustainable future.  
          Our platform provides insights on sustainability reports, real-life green initiatives, 
          and hands-on learning — all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Sustainable Reports */}
          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">📊 Sustainability Reports</h2>
            <p className="text-[#bdbdbd] mb-4">
              Explore detailed reports from top organizations. Understand how businesses are reducing their environmental impact and aligning with SDGs.
            </p>
            <Link
              to="/sustainable-report"
              className="text-green-400 hover:underline font-medium"
            >
              Read Reports →
            </Link>
          </div>

          {/* Real-Life News */}
          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">📰 Real-Life Sustainable News</h2>
            <p className="text-[#bdbdbd] mb-4">
              Stay up to date with stories about climate action, green startups, and communities making a difference across the globe.
            </p>
            <Link
              to="/news"
              className="text-green-400 hover:underline font-medium"
            >
              View News →
            </Link>
          </div>

          {/* Learn & Discover */}
          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">📚 Learn Sustainability</h2>
            <p className="text-[#bdbdbd] mb-4">
              Learn the concepts of sustainable development, climate policies, and green living with curated learning resources.
            </p>
            <Link
              to="/learn"
              className="text-green-400 hover:underline font-medium"
            >
              Start Learning →
            </Link>
          </div>

          {/* Chatbot */}
          <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">🤖 Ask Our Chatbot</h2>
            <p className="text-[#bdbdbd] mb-4">
              Have questions? Talk to our AI-powered chatbot to quickly learn about terms, reports, and sustainable practices.
            </p>
            <Link
              to="/chatbot"
              className="text-green-400 hover:underline font-medium"
            >
              Chat Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
