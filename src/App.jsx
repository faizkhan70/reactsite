import React from 'react'
import Home from './Componets/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Componets/Footer';
import Navbar from './Componets/Navbar';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Courses from './Sections/Courses';
import PgCourses from './Sections/PgCourses';
import UgCourses from './Sections/UgCourses';
import Blog from './Sections/Blog';
import Blogpage from './Sections/Blogpage';
import Blogpage1 from './Sections/Blogpage1';
import Blogpage2 from './Sections/Blogpage2';
import Trem from './Sections/Trem';
import Privacy from './Sections/Privacy';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/courses" element={<Courses />} />

          <Route path="/pgcourses" element={<PgCourses />} />
          <Route path="/ugcourses" element={<UgCourses />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpage" element={<Blogpage />} />
          <Route path="/blogpage1" element={<Blogpage1 />} />
          <Route path="/blogpage2" element={<Blogpage2 />} />

          <Route path="/trem" element={< Trem/>} />
          <Route path="/privacy" element={< Privacy/>} />



      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
