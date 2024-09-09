import React from 'react';
import { motion } from 'framer-motion';

const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen z-30 bg-blue-900 dark:bg-primaryDark' 
      initial={{x:'100%', width:'100%'}}
      animate={{x:'0%', width:'0%'}}
      exit={{x:['0%','100%'],width:['0%','100%']}}
      transition={{duration:0.8, ease:'easeInOut'}}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen z-20 bg-white dark:bg-dark' 
      initial={{x:'100%', width:'100%'}}
      animate={{x:'0%', width:'0%'}}
      transition={{delay:0.2, duration:0.8, ease:'easeInOut'}}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen z-10 bg-[#e89835] dark:bg-light' 
      initial={{x:'100%', width:'100%'}}
      animate={{x:'0%', width:'0%'}}
      transition={{delay:0.4, duration:0.8, ease:'easeInOut'}}
      />
    </>
  )
}

export default Transition;