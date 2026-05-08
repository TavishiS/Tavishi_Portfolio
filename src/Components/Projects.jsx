import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

import kafkaImg from '../assets/kafka.jpeg'; 
import moodflixImg from '../assets/emo2mov.jpeg'; 
import campusImg from '../assets/app.png'; // Using a preview image for CampusThrift

const Projects = () => {
  const projectData = [
    {
      title: "CampusThrift",
      main: "A high-performance C2C marketplace app designed exclusively for college students. It bridges the gap between senior students who wish to declutter and junior students who need essential items at affordable prices.",
      bannerImg: campusImg,
      git_link: "https://github.com/TavishiS/campus_thrift",
      demo_link: "https://drive.google.com/file/d/1_DdDTaFCfTq8SGkjlNf5nObsXGc8XPDw/view?usp=sharing", // Paste your Drive link here
      tags: ["Flutter", "Firebase", "NoSQL", "Mobile"]
    },
    {
      title: "Distributed Event Streamer",
      main: "A Kafka-inspired streaming engine which uses a crash-safe, file-backed append-only log featuring OS-level file locks for concurrency and hash-based partitioning to simulate industrial consumer-group scaling.",
      bannerImg: kafkaImg,
      git_link: "https://github.com/TavishiS/Kafka",
      tags: ["Python", "Systems", "Concurrency", "Kafka-Core"]
    },
    {
      title: "MoodFlix",
      main: "Developed an emotion-to-movie recommendation engine using HuggingFace's Wav2Vec2 transformer to detect human emotions from voice/text, fetching metadata from TMDB and suggesting top 5 movies best matching the user's mood.",
      bannerImg: moodflixImg,
      git_link: "https://github.com/TavishiS/Emotion2Movies",
      tags: ["Flask", "Huggingface", "Embedding Models"]
    }
  ];

  return (
    <motion.div 
      id="Projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-white flex flex-col bg-black bg-opacity-40 shadow-2xl mx-0 md:mx-20 rounded-3xl p-8 md:p-16 backdrop-blur-md overflow-hidden font-jakarta my-10"
    >
      {/* HEADER SECTION - Now Aligned Left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mb-12"
      >
        <div className="flex items-center gap-2 font-mono text-2xl md:text-4xl text-blue-400">
          <span className="text-gray-500">{">"}</span>
          <h2 className="font-bold tracking-tight text-white">key_projects.sh</h2>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-3 h-8 md:h-10 bg-blue-500"
          ></motion.span>
        </div>
        <p className="text-gray-500 mt-4 ml-6 md:ml-10 text-lg">
          The projects closest to my heart 💗
        </p>
      </motion.div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;