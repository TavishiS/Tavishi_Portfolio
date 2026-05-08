import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.div
      id="Footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      // Changed rounded-t-3xl to rounded-3xl and added mb-10 for the "floating" effect
      className="text-white flex flex-col md:flex-row justify-between items-center bg-black bg-opacity-40 shadow-2xl mx-4 md:mx-20 rounded-3xl p-10 md:p-16 backdrop-blur-md border border-white/10 mt-20 mb-10"
    >
      {/* Left Side: Text Content */}
      <div className="text-center md:text-left mb-10 md:mb-0">
        <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-2xl md:text-4xl text-blue-400 mb-2">
          <span className="text-gray-500">{">"}</span>
          <h2 className="font-bold tracking-tight text-white">contact.sh</h2>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-3 h-8 md:h-10 bg-blue-500"
          ></motion.span>
        </div>
        <h3 className="text-gray-400 text-sm md:text-xl font-light">
          Feel free to reach out or collaborate !! 🤝
        </h3>
      </div>

      {/* Right Side: Social Links */}
      <ul className="space-y-4 md:space-y-6">
        {/* EMAIL */}
        <motion.li 
          whileHover={{ x: 10 }}
          className="flex gap-4 items-center group cursor-pointer"
        >
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
            <MdOutlineEmail className="text-blue-400" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Gmail</span>
            <a href="mailto:tavishi.srivastava2004@gmail.com" className="text-sm md:text-lg hover:text-blue-400 transition-colors">
              tavishi.srivastava2004@gmail.com
            </a>
          </div>
        </motion.li>

        {/* LINKEDIN */}
        <motion.li 
          whileHover={{ x: 10 }}
          className="flex gap-4 items-center group cursor-pointer"
        >
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
            <CiLinkedin className="text-blue-400" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">LinkedIn</span>
            <a 
              href="https://www.linkedin.com/in/tavishi-srivastava-16a4582a2/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm md:text-lg hover:text-blue-400 transition-colors"
            >
              Connect here
            </a>
          </div>
        </motion.li>

        {/* GITHUB */}
        <motion.li 
          whileHover={{ x: 10 }}
          className="flex gap-4 items-center group cursor-pointer"
        >
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
            <FaGithub className="text-blue-400" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Github</span>
            <a 
              href="https://github.com/TavishiS" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm md:text-lg hover:text-blue-400 transition-colors"
            >
              Visit my Github profile
            </a>
          </div>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Footer;