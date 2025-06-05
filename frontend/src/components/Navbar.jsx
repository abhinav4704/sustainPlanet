import React from 'react'
import { Link } from 'react-router-dom'
import MyComponent from './importSVG'


const Navbar = () => {
  return (
    <nav className="flex justify-between border-b border-b-gray-600 rounded-t-3xl items-center p-2 bg-[#0F1714] shadow-md">

      <div  className=' pl-12'>
      <Link to="/" className="hover:text-green-300"><MyComponent/></Link>
      
      </div>
      <div className="space-x-4">
        
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
