import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bg from "./assets/forest1mb.jpg";
import Navbar from './components/Navbar'
import Home from './components/Homepage'
import Contact from './components/Contact';
import About from './components/About'
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    < div className=''  >
      <Navbar/>
      <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/learn" element={<Learn/>} />
    <Route path='/community' element={<Community/>}/> */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        
       {/* <Route path="/report" element={<SustainableReport />} />
        <Route path="/chatbot" element={<Chatbot />} /> */}
      </Routes>
    </div>
  )
}

export default App
