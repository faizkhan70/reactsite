import React from 'react'
import Home from './Componets/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Componets/Footer';
import Navbar from './Componets/Navbar';
import About from './Sections/About';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
