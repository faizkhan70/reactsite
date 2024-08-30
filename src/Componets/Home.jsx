import React from 'react'
import Hero from './Hero';
import Navbar from './Navbar';
import Meetings from './Meetings';
import Courses from './Courses';
import Apply from './Apply';
import Contact from './Contact';
import Footer from './Footer';
const Home = () => {
  return (
 <>
  <Navbar/>
  <Hero/>
  <Meetings/>
  <Courses/>
  <Apply/>
  <Contact/>
  <Footer/>
  </>
  )
}

export default Home;
