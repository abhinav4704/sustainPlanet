import React from "react";
import { Leaf, Users } from "lucide-react";

const About = () => {
  return (
    <div className="text-white min-h-screen px-6 py-12 font-sans">
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Leaf className="w-6 h-6 text-green-500" />
          <h1 className="text-4xl font-bold">Building a More Sustainable Future</h1>
        </div>

        {/* Intro */}
        <p className="text-lg leading-relaxed text-gray-300">
          We are a team from diverse mindsets united by one goal:{" "}
          <span className="italic text-green-400 font-medium">
            Building a more sustainable future.
          </span>
        </p>

        {/* Quote */}
        <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-400">
          “The journey of a thousand miles begins with one step.”
          <br />
          <span className="text-sm text-green-500">— Lao Tzu</span>
        </blockquote>

        {/* Mission */}
        <p className="leading-relaxed text-gray-300">
          At SustainPlanet, we believe small actions lead to big changes. Sustainability is a journey, and we’re walking it together—making conscious choices for a better tomorrow.
        </p>

        {/* Our Purpose */}
        <div className="bg-zinc-800/40 p-6 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Purpose</h2>
          <p className="leading-relaxed text-gray-300">
            We simplify sustainability. Through resources, innovation highlights, and community, we make sustainable living practical, accessible, and inspiring.
          </p>
        </div>

        {/* Our Values */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-xl font-semibold text-green-400 mb-2">Integrity</div>
              <p className="text-gray-300 text-sm">
                We are rooted in honesty, openness, and responsibility—building trust with every action we take.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-xl font-semibold text-green-400 mb-2">Innovation</div>
              <p className="text-gray-300 text-sm">
                We embrace creativity and bold ideas to discover smarter, greener solutions to global challenges.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-xl font-semibold text-green-400 mb-2">Collaboration</div>
              <p className="text-gray-300 text-sm">
                We believe in the power of teamwork and collective action to drive lasting environmental change.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-green-500" />
            <h2 className="text-2xl font-semibold">Meet the Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-xl font-semibold text-white mb-2">Ms Revathy</div>
              <div className="w-full h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center text-gray-500">
                &lt;&lt; Photo &gt;&gt;
              </div>
              <p className="text-gray-300">
                A software engineer and environmental advocate, Revathy’s focus on long-term stewardship drives everything we do.
              </p>
            </div>

            <div className="bg-zinc-900/50 p-5 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-xl font-semibold text-white mb-2">Ms Reena</div>
              <div className="w-full h-40 bg-gray-700 rounded-lg mb-3 flex items-center justify-center text-gray-500">
                &lt;&lt; Photo &gt;&gt;
              </div>
              <p className="text-gray-300">
                Commerce graduate turned environmentalist. Inspired by the Ganga’s pollution crisis, Reena is passionate about change.
              </p>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <p className="italic text-center text-green-500 mt-16">
          Join us as we rethink progress—together.
        </p>
      </div>
    </div>
  );
};

export default About;
