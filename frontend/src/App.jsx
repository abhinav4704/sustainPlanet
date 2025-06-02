import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home3 from './pages/Home3'
import Home4 from './pages/Home4'
import Home5 from './pages/Home5'
import Home6 from './pages/Home6'
import Home1 from './pages/Home1'
import Home2 from './pages/Home2'
import Home from './pages/Home'

import About from './pages/About'
import Contact from './pages/Contact'
import SustainableReport from './pages/SustainableReport'
import Chatbot from './pages/Chatbot'
import Login from './pages/Login'
import Learn from './pages/Learn'

const App = () => {
  return (
    <div className="bg-[#0D0D0D]  text-[#e0e0d1] min-h-screen">

      <Navbar />
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/learn" element={<Learn/>} />

        <Route path="/" element={<Home4 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/report" element={<SustainableReport />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  )
}

export default App
