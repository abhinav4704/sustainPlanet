import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav className="flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-white">
        
        {/* Logo on Left */}
        <div className="text-base font-semibold whitespace-nowrap">
          SustainPlanet
        </div>

        {/* Centered Nav Links */}
        <ul className="flex space-x-1 mx-auto text-sm font-medium">
          <li>
            <Link
              to="/"
              className="px-3 py-1 rounded-full bg-transparent text-black hover:bg-white/20 backdrop-blur-sm transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-1 rounded-full bg-transparent text-black hover:bg-white/20 backdrop-blur-sm transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-3 py-1 rounded-full bg-transparent text-black hover:bg-white/20 backdrop-blur-sm transition"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/chatbot"
              className="px-3 py-1 rounded-full bg-transparent text-black hover:bg-white/20 backdrop-blur-sm transition"
            >
              Chatbot
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className="px-3 py-1 rounded-full bg-transparent text-black hover:bg-white/20 backdrop-blur-sm transition"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className="px-3 py-1 rounded-full bg-transparent text-black hover:bg-white/20 backdrop-blur-sm transition"
            >
              Reports
            </Link>
          </li>
        </ul>

        {/* Login button on right */}
        <Link
          to="/login"
          className="relative inline-block px-4 py-1.5 text-sm text-[#c1a362] border border-[#c1a362] rounded-full font-medium bg-transparent transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden hover:text-[#212121] hover:scale-105 hover:shadow-[0_0_12px_rgba(193,163,98,0.4)] active:scale-100 group"
        >
          <span className="absolute inset-0 m-auto w-10 h-10 rounded-full scale-0 bg-[#c1a362] z-[-1] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[3]" />
          Login
        </Link>
      </nav>
    </div>
  );
}
