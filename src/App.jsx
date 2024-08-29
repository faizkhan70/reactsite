import React from 'react'
import Home from './Componets/Home';
import Hero from './Componets/Hero';
import Meetings from './Componets/Meetings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from './Componets/Courses';
import Apply from './Componets/Apply';
import Contact from './Componets/Contact';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="hero" element={<Hero/>} />
          <Route path="meetings" element={<Meetings/>} />
          <Route path="courses" element={<Courses/>} />
          <Route path="apply" element={<Apply/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
