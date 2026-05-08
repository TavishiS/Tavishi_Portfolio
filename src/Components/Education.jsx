import React from "react";
import { motion } from "framer-motion";
import { IoSchoolOutline } from "react-icons/io5";
import { FaAward, FaStar } from "react-icons/fa";

const Education = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="Education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="text-white flex flex-col items-center justify-center bg-black bg-opacity-40 shadow-2xl mx-0 md:mx-20 rounded-3xl p-8 md:p-16 backdrop-blur-md overflow-hidden font-jakarta my-20"
    >
      {/* HEADER SECTION */}
      <motion.div 
        variants={itemVariants}
        className="w-full max-w-6xl mb-16"
      >
        <div className="flex items-center gap-2 font-mono text-2xl md:text-4xl text-purple-400">
          <span className="text-gray-500">{">"}</span>
          <h2 className="font-bold tracking-tight text-white">education.log</h2>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-3 h-8 md:h-10 bg-purple-500"
          ></motion.span>
        </div>
      </motion.div>

      <div className="relative w-full max-w-5xl">
        {/* THE VERTICAL LINE (Desktop) */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30"></div>

        <div className="space-y-12">
          {/* IIT JODHPUR CARD */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative flex flex-col md:flex-row items-center justify-between w-full"
          >
            <div className="hidden md:block w-5/12"></div> {/* Spacer */}
            <div className="z-10 bg-[#7bb2ff] p-2 rounded-full border-4 border-[#0a0a0a]">
              <IoSchoolOutline size={24} className="text-black" />
            </div>
            <div className="w-full md:w-5/12 ml-10 md:ml-0 md:pl-8 mt-4 md:mt-0 bg-white bg-opacity-5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-blue-400">IIT Jodhpur 🎓</h3>
              <p className="text-sm italic text-gray-400 mt-1">B.Tech in CSE (2023 - Present)</p>
              <p className="text-sm md:text-base mt-4 text-gray-300 leading-relaxed">
                Focusing on high-level Software Engineering and DSA. Beyond academics, I've spent my time here growing as a person, honing my communication, and diving deep into the tech culture.
              </p>
            </div>
          </motion.div>

          {/* GHS&C - CLASS 12TH CARD */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full"
          >
            <div className="hidden md:block w-5/12"></div> {/* Spacer */}
            <div className="z-10 bg-purple-500 p-2 rounded-full border-4 border-[#0a0a0a]">
              <FaAward size={24} className="text-white" />
            </div>
            <div className="w-full md:w-5/12 ml-10 md:ml-0 md:pr-8 mt-4 md:mt-0 bg-white bg-opacity-5 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/80 transition-all duration-300 shadow-xl">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-bold text-purple-400">Class 12th, ISC 🏆</h3>
                <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-2 py-1 rounded-md border border-purple-500/50">AIR 2</span>
              </div>
              <p className="text-sm italic text-gray-400 mt-1">Girls' High School & College | 2022</p>
              
              <div className="mt-4 flex items-center gap-2 bg-purple-500/10 p-2 rounded-lg border border-purple-500/20">
                <FaStar className="text-yellow-400 text-sm" />
                <p className="text-xs md:text-sm font-semibold text-purple-100">99.5% Overall | 100 in CS, Math & Chem</p>
              </div>

              <p className="text-xs md:text-sm mt-4 text-gray-400 italic">
                Honoured by the Chief Minister of UP, Shri Yogi Aadityanath Ji, for academic excellence.
              </p>
            </div>
          </motion.div>

          {/* GHS&C - CLASS 10TH CARD */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative flex flex-col md:flex-row items-center justify-between w-full"
          >
            <div className="hidden md:block w-5/12"></div> {/* Spacer */}
            <div className="z-10 bg-gray-500 p-2 rounded-full border-4 border-[#0a0a0a]">
              <IoSchoolOutline size={24} className="text-white" />
            </div>
            <div className="w-full md:w-5/12 ml-10 md:ml-0 md:pl-8 mt-4 md:mt-0 bg-white bg-opacity-5 p-6 rounded-2xl border border-white/10 hover:border-gray-500/50 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-gray-200">Class 10th, ICSE 💻</h3>
              <p className="text-sm italic text-gray-400 mt-1">GHS&C, Prayagraj | 2020</p>
              <p className="text-sm md:text-base mt-4 text-gray-300">
                Secured <span className="text-white font-bold">97%</span> with a <span className="text-white font-bold">perfect 100</span> in Computer Science. This was the spark that ignited my passion for coding.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;