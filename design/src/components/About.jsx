import React from "react";
import bg from "../assets/forest1mb.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full relative">
      {/* Hero section with background */}
      <section
        className="h-screen flex flex-col justify-center items-center text-white text-center px-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Our Purpose
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
            Learn about our mission, values, and the people powering SustainPlanet.
          </p>
        </motion.div>
      </section>

      {/* Content section */}
      <section className="py-20 px-6 text-white bg-black/90">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Purpose (moved above, but kept here as supporting content) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-300">
              At SustainPlanet, we simplify sustainability. Through resources,
              innovation highlights, and community, we make sustainable living
              practical, accessible, and inspiring.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity",
                  description:
                    "Rooted in honesty, openness, and responsibility—building trust with every action.",
                },
                {
                  title: "Innovation",
                  description:
                    "We embrace creativity and bold ideas to discover smarter, greener solutions.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe in collective action to drive long-lasting environmental change.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-green-400 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Meet the Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Ms Revathy",
                  bio: "A software engineer and environmental advocate, Revathy’s focus on long-term stewardship drives everything we do.",
                },
                {
                  name: "Ms Reena",
                  bio: "Commerce graduate turned environmentalist. Inspired by the Ganga’s pollution crisis, Reena is passionate about change.",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <div className="w-full h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center text-gray-500">
                    &lt;&lt; Photo &gt;&gt;
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <blockquote className="italic text-gray-400 text-lg">
              “The journey of a thousand miles begins with one step.”
            </blockquote>
            <span className="block mt-2 text-green-500">— Lao Tzu</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
