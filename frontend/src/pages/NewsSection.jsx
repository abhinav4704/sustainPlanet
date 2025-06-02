import Marquee from "react-fast-marquee";

const newsItems = [
  {
    title: "India launches new climate initiative",
    desc: "Government introduces policies focused on green tech and carbon neutrality.",
  },
  {
    title: "UN releases 2024 SDG report",
    desc: "Progress tracking of global sustainability goals with key takeaways.",
  },
  {
    title: "CO₂ emissions drop globally by 3%",
    desc: "Major industries adopt cleaner technologies driving emissions down.",
  },
  {
    title: "Youth-led climate protests gain traction",
    desc: "Students organize global marches demanding sustainability reform.",
  },
  {
    title: "Global treaty expands plastic bans",
    desc: "Nations commit to phase out single-use plastics by 2030.",
  },
];

function NewsSection() {
  return (
    <section className="mt-12 w-full overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-green-300">🌍 Sustainability News</h2>

      <div className="w-full overflow-hidden">
        <Marquee pauseOnHover={true} gradient={false} speed={40}>
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] border border-green-700 text-gray-200 rounded-xl p-4 mx-4 min-w-[260px] max-w-xs shadow-md hover:shadow-green-600 transition-shadow duration-30"
            >
              <h3 className="text-lg font-semibold text-green-300 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default NewsSection;
