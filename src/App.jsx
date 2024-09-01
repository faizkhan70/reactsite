import React from 'react'
import Home from './Componets/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Componets/Footer';
import Navbar from './Componets/Navbar';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Courses from './Sections/Courses';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
