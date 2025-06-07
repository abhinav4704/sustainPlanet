import React from "react";
import bg from "../assets/forest1mb.jpg";
import { motion } from "framer-motion";
import community from '../assets/Pasted_image.png';

import GlobalWarmingGraph from "./Sustainability";
import FloatingLeavesAndRoots from "./FloatingLeavesAndRoots"; // New animation component

const Home = () => {
  return (
    <div className="w-full relative">
      {/* Hero Section with full screen background image */}
      <section
  className="h-screen flex flex-col justify-center items-center text-white text-center px-6"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // ✅ This keeps it stuck in place while scrolling
    zIndex: 10,
  }}
>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            SustainPlanet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-xl mx-auto text-gray-200"
          >
            Learn, Discuss, and Stay Updated on Sustainable Development Goals
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.3 }}
          >
            <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-green-800 transition">
              Start Learning
            </button>
            <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-green-800 transition">
              Ask the Chatbot
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating leaves & roots background behind all other content */}
      <FloatingLeavesAndRoots />

      {/* Other page sections */}
      <section>
        <GlobalWarmingGraph />
      </section>

      <section className="py-16 rounded-4xl w-15/16 px-6 text-black mt-25 mb-25 mx-auto">
        <h2 className="text-3xl font-bold  mb-6 ml-10">Community</h2>
        <div className="text-center w-15/16 p-10 flex gap-5 rounded-2xl h-[400px]">
          <div className="text-left text-xl pt-10 flex-col w-1/2">
            <div>Join the community</div>
            <br />
            <div>
              Connect with like minded individuals, share ideas, and collaborate
              on sustainable projects
            </div>

            <button className="px-6 py-2 my-6 bg-gray-700 rounded-full text-white font-semibold hover:bg-white hover:text-green-800 transition">
              Join Now
            </button>
          </div>
          <img src={community} alt="Community" />
        </div>
      </section>

      <section
        id="learning"
        className="h-screen snap-start flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-black">
            Learn About Sustainable Development
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Dive into important topics that shape a sustainable future. Understand
            the goals and actions driving positive change around the world.
          </p>

          <button
            onClick={() => (window.location.href = "/learn")}
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
          >
            Go to Learning Page
          </button>
        </motion.div>
      </section>

      <section className="min-h-[400px] py-20 px-6 sm:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-black">Sustainability News</h3>

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: [-0, -window.innerWidth] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 30,
            }}
            style={{ willChange: "transform" }}
          >
            {[
              {
                title: "Global Climate Agreement Reached",
                summary: "World leaders sign a pact to cut emissions by 45% by 2030.",
              },
              {
                title: "Solar Power Surpasses Coal",
                summary: "Solar energy becomes the dominant energy source globally.",
              },
              {
                title: "Ocean Cleanup Innovation",
                summary: "New system removes 1M+ tons of plastic in 6 months.",
              },
              {
                title: "India Leads Green Hydrogen Push",
                summary: "A global leader emerges in green hydrogen development.",
              },
              {
                title: "Youth Activism Shapes Policy",
                summary: "Students drive sustainability-focused legislation.",
              },
              // Repeat items to loop
              {
                title: "Global Climate Agreement Reached",
                summary: "World leaders sign a pact to cut emissions by 45% by 2030.",
              },
              {
                title: "Solar Power Surpasses Coal",
                summary: "Solar energy becomes the dominant energy source globally.",
              },
              {
                title: "Ocean Cleanup Innovation",
                summary: "New system removes 1M+ tons of plastic in 6 months.",
              },
              {
                title: "India Leads Green Hydrogen Push",
                summary: "A global leader emerges in green hydrogen development.",
              },
              {
                title: "Youth Activism Shapes Policy",
                summary: "Students drive sustainability-focused legislation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 min-w-[300px] max-w-sm p-6 rounded-2xl border border-gray-300 shadow"
              >
                <h4 className="text-xl font-semibold text-green-700 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.summary}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-400">
        <p>© 2025 SustainPlanet. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
