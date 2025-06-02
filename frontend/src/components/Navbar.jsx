import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1e1e1e] shadow-md">
      <h1 className="text-xl font-bold text-green-400">SustainPlanet</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-green-300">Home</Link>
        <Link to="/about" className="hover:text-green-300">About</Link>
        <Link to="/contact" className="hover:text-green-300">Contact</Link>
        <Link to="/report" className="hover:text-green-300">Report</Link>
        <Link to="/chatbot" className="hover:text-green-300">Chatbot</Link>
        <Link
  to="/login"
  className="hover:text-green-400 transition text-sm"
>
  Login
</Link>

      </div>
    </nav>
  )
}

export default Navbar
