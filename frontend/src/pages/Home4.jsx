import React from "react";
import bg from '../assets/treewall.webp';
import community from '../assets/Pasted_image.png';


const Home4 = () => {
  return (
    <div className="bg-[#0F1714] p-5 text-white font-sans">
      {/* Hero Section */}
      <div className="flex items-center justify-center mb-10">
      

      <section className=" text-center w-15/16  p-10  rounded-2xl h-[400px]"   style={{ backgroundImage: `url(${bg})` }}>
        <h1 className="text-4xl font-roboto md:text-5xl pt-20 font-bold mb-4">
          Building a Sustainable Future
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Learn, Discuss, and Stay Updated on Sustainable Development Goals 
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-20">
          <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-green-800 transition">
            Start Learning
          </button>
          <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-green-800 transition">
            Ask the Chatbot
          </button>
        </div>
      </section>
      </div>
      {/* Why Sustainability Section */}
      <div className=" py-12 text-center">
        <h2 className="text-2xl font-bold mb-15">Why Sustainability Matters</h2>
        <div className="flex flex-wrap justify-center gap-8 text-lg">
          <div>🌍 <strong>17</strong> SDGs to transform our world</div>
          <div>🏭 <strong>75%</strong> of emissions from just 10 countries</div>
          <div>👩‍🏫 <strong>10k+</strong> learners impacted globally</div>
        </div>
      </div>

            {/* Community Highlights */}
            <section className="py-16 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 ml-10">Community</h2>
        <div className=" text-center w-15/16  p-10 flex gap-5 rounded-2xl h-[400px]  ">
        <div className="text-left text-xl flex-col  w-1/2">        
          <div>Join the community</div>
          <br></br>
          <div>Connect with like minded individuals, share ideas, and collaborate on sustainable projects</div>
          
          <button className="px-6 py-2 my-6 bg-gray-700 rounded-full font-semibold hover:bg-white hover:text-green-800 transition">
            Join Now
          </button>
        </div>
        <img src={community} alt="" />

        </div>
      </section>

      {/* Featured Learning Topics */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Popular Learning Topics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Climate Action", "Clean Energy", "No Poverty"].map((topic) => (
            <div
              key={topic}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{topic}</h3>
              <p className="text-sm">
                Learn about {topic.toLowerCase()} and its impact on global sustainability.
              </p>
              <button className="mt-4 text-green-400 hover:underline">Learn More →</button>
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
              className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                News Title {i}
              </h3>
              <p className="text-sm text-gray-300">
                A short summary of a recent development in sustainability goes here.
              </p>
              <a className="text-green-400 mt-3 inline-block hover:underline" href="#">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>



      {/* Footer */}
      <footer className=" py-10 text-center text-sm text-gray-400">
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

export default Home4;
