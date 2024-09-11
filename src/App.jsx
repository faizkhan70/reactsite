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
import University from './Sections/University';
import Universitypage from './Sections/Universitypage';
import Universitypage2 from './Sections/Universitypage2';
import Universitypage3 from './Sections/Universitypage3';
import Universitypage4 from './Sections/Universitypage4';
import Universitypage5 from './Sections/Universitypage5';

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
          <Route path="/unversity" element={<University />} />
          <Route path="/unversitypage" element={<Universitypage />} />
          <Route path="/unversitypage2" element={<Universitypage2 />} />
          <Route path="/unversitypage3" element={< Universitypage3/>} />
          <Route path="/unversitypage4" element={< Universitypage4/>} />
          <Route path="/unversitypage5" element={< Universitypage5/>} />
          <Route path="/trem" element={< Trem/>} />
          <Route path="/privacy" element={< Privacy/>} />



      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
