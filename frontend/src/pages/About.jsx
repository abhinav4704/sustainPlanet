import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-12 font-roboto max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-helvetica font-bold mb-8 text-green-400">
        Building a More Sustainable Future
      </h1>

      {/* Intro paragraph */}
      <p className="mb-6 text-lg leading-relaxed">
        We are a team of people from diverse mindsets and phases but united by one purpose: <br />
        <span className="font-helvetica italic text-green-300">Building a more sustainable future</span>
      </p>

      {/* Body content */}
      <p className="mb-4 leading-relaxed">
        At Sustain Planet, we believe that small actions are the main ingredients and steps for big change.
        The journey of a thousand miles begins with one step.
      </p>

      <p className="mb-4 italic font-helvetica text-green-300">
        Lao Tzu, Chinese Philosopher
      </p>

      <p className="mb-6 leading-relaxed">
        Sustainability is not a destination—it’s a journey, a movement, a responsibility and an unwavering commitment.
        In a world filled with so many uncertainties due to our unsustainable actions and lack of remedial steps,
        we choose to stand and act to the best of our abilities and resources.
      </p>

      <p className="mb-6 leading-relaxed">
        And while the journey may seem long, we walk it together—because we believe collective action creates exponential impact.
      </p>

      <p className="mb-6 leading-relaxed">
        We exist to empower and enable. To make sustainability not just a buzzword, but a way of life.
        That’s why we share knowledge, curate solutions, and spotlight innovations that help individuals and businesses reduce
        their environmental impact and be more sustainable.
      </p>

      <p className="mb-6 leading-relaxed">
        Rooted in transparency, driven by purpose, and guided by conscience, we strive to make sustainability accessible, actionable,
        and inspiring for all. Whether you're just beginning your journey or deep into it, we're here to support every step toward
        a more responsible and sustainable world.
      </p>

      <p className="mb-6 leading-relaxed">
        Our platform brings together individuals, communities, and businesses to share ideas, adopt responsible practices, and inspire
        one another to be more sustainable - step by step, choice by choice.
      </p>

      <p className="mb-8 leading-relaxed">
        Together, we can create a world where sustainability is not an exception, but the norm.
        Where progress doesn’t come at the cost of the planet. And where hope is built on everyday sustainable action.
      </p>

      <p className="mb-12 font-helvetica italic text-green-400 text-center text-lg">
        Join us as we rethink progress to sustainability together.
      </p>

      {/* Team Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Ms Revathy */}
        <div>
          <div className="mb-4 font-helvetica text-xl font-semibold text-green-300">
            Ms Revathy
          </div>
          <p className="leading-relaxed">
            Ms Revathy is passionate about green earth and a software engineer by qualification.
            Her commitment to responsible growth and long-term stewardship is at the heart of everything we do.
          </p>
        </div>

        {/* Ms Reena */}
        <div>
          <div className="mb-4 font-helvetica text-xl font-semibold text-green-300">
            Ms Reena
          </div>
          {/* Replace below with actual photo */}
          <div className="mb-4 w-48 h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
            &lt;&lt;&lt;Reena Photo&gt;&gt;&gt;
          </div>
          <p className="leading-relaxed">
            Ms Reena has done graduation in commerce and found her calling in the sustainability movement
            after noticing Ganga river getting severely polluted and wants to do her bit for a sustainable planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
