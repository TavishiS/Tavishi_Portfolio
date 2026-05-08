import React from "react";
import { motion } from "framer-motion";
// Swapped icons to more standard ones to resolve the export error
import { IoShieldCheckmarkOutline, IoSettingsOutline } from "react-icons/io5";

const Courses = () => {
  const gradedCourses = [
    { name: "Principles of Programming Languages", grade: "A" },
    { name: "Cyber Security", grade: "A" },
    { name: "Blockchain", grade: "A" },
    { name: "Operating Systems", grade: "A-" },
    { name: "Embedded Systems", grade: "A-" },
    { name: "Design and Analysis of Algorithms", grade: "A-" },
  ];

  const coreCourses = [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Computer Organization & Architecture",
    "Database Systems",
    "Computer Networks",
  ];

  return (
    <motion.div
      id="Courses"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-white flex flex-col bg-black bg-opacity-40 shadow-2xl mx-0 md:mx-20 rounded-3xl p-8 md:p-16 backdrop-blur-md border border-white/10 my-5"
    >
      {/* HEADER */}
      <div className="flex items-center gap-2 font-mono text-2xl md:text-4xl text-yellow-500 mb-10">
        <span className="text-gray-500">{">"}</span>
        <h2 className="font-bold tracking-tight text-white">coursework.log</h2>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-3 h-8 md:h-10 bg-yellow-500"
        ></motion.span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* GRADED COURSES */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6 text-gray-300">
            <IoShieldCheckmarkOutline className="text-yellow-500" />
            Academic Excellence
          </h3>
          <div className="space-y-3">
            {gradedCourses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-all"
              >
                <span className="text-sm md:text-base font-medium">{course.name}</span>
                <span className="bg-yellow-500/20 text-yellow-400 font-bold px-3 py-1 rounded-lg text-sm border border-yellow-500/40">
                  {course.grade}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CORE SUBJECTS */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6 text-gray-300">
            <IoSettingsOutline className="text-blue-400" />
            Core Fundamentals
          </h3>
          <div className="flex flex-wrap gap-3">
            {coreCourses.map((course, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500/5 border border-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium hover:border-blue-400/50 transition-all cursor-default"
              >
                {course}
              </motion.span>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5 italic text-gray-400 text-sm leading-relaxed">
            "These courses have shaped my understanding of low-level systems, 
            algorithmic efficiency, and the architecture of modern software."
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Courses;