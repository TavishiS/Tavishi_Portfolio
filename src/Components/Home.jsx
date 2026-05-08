import React from 'react';
import { motion } from 'framer-motion';
import tavishi_portfolio_img from '../assets/tavishi_portfolio_img.jpg';
import TextChange from '../TextChange';

const Home = () => {
  return (
    <div className='text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-10 md:p-20 min-h-screen'>
      
      {/* TEXT CONTENT SECTION */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='md:w-2/4 pt-10 md:pt-0'
      >
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChange/>
        </h1>
        <br />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='text-sm md:text-2xl tracking-tight text-gray-300'
        >
          Welcome to my Portfolio Website... Hope you enjoy going through it :)
        </motion.p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className='mt-8 md:mt-10 text-white py-2 px-6 text-sm md:text-lg font-semibold rounded-full bg-[#465697] hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(70,86,151,0.6)] duration-300'
        >
          <a href="#Footer">Contact Me!</a>
        </motion.button>
      </motion.div>

      {/* IMAGE SECTION */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className='md:w-2/4 flex justify-center md:justify-end md:pr-10'
      >
        <img 
          className="w-3/4 max-w-sm md:max-w-md rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-white/10" 
          src={tavishi_portfolio_img} 
          alt="Tavishi's Portfolio" 
        />
      </motion.div>
      
    </div>
  );
};

export default Home;