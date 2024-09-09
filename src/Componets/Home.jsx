import React from 'react'
import Hero from './Hero';
import Meetings from './Meetings';
import Courses from './Courses';
import Apply from './Apply';
import Contact from './Contact';
import Transition from '../Transition';

const Home = () => {
  return (
 <div className='overflow-hidden'>
  <Transition/>
  <Hero/>
  <Meetings/>
  <Courses/>
  <Apply/>
  <Contact/>
  </div>
  )
}

export default Home;
