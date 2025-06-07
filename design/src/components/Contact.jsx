import FloatingLeavesAndRoots from "./FloatingLeavesAndRoots";

const Contact = () => {
  return (
    <div className="w-full relative min-h-screen text-white">
      {/* Background leaves and roots */}
      <FloatingLeavesAndRoots />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-8 text-green-800">Contact Us</h2>
        <form className="max-w-xl w-full space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded bg-white text-black"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded bg-white text-black"
            rows={5}
          />
          <button className="px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
