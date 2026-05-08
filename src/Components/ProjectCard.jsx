import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';

const ProjectCard = ({ title, main, bannerImg, demo_link, git_link, tags }) => {
  return (
    <motion.div 
      // The "Pop-up" effect matching About/Skills
      whileHover={{ y: -12, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col bg-white bg-opacity-5 border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-all duration-300 h-full group"
    >
      
      {/* Image Container */}
      <div className="h-56 overflow-hidden relative">
        <img 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-500"
          src={bannerImg} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, i) => (
            <span key={i} className="text-[10px] px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md font-mono border border-blue-500/30">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {main}
        </p>

        <div className="mt-auto flex flex-wrap gap-3">
          <a 
            href={git_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#465697] hover:bg-blue-600 text-white py-2 px-4 rounded-3xl text-sm font-semibold transition-all duration-300"
          >
            <FaGithub /> GitHub
          </a>

          {/* Conditional "Watch Demo" Button */}
          {demo_link && (
            <a 
              href={demo_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-3xl text-sm font-semibold border border-white/10 transition-all duration-300"
            >
              <FaPlayCircle className="text-blue-400" /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;