import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } 
    }
  };

  return (
    // MAIN WRAPPER: Now animated to "pop up" as you scroll to it
    <motion.div
      id="About"
      initial={{ opacity: 0, scale: 0.8, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      className="text-white flex flex-col items-center justify-center bg-black bg-opacity-40 shadow-2xl mx-0 md:mx-20 rounded-3xl p-8 md:p-16 backdrop-blur-md overflow-hidden font-jakarta my-10"
    >
      {/* WHOAMI TERMINAL HEADER */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-6xl mb-12"
      >
        <div className="flex items-center gap-2 font-mono text-2xl md:text-4xl text-blue-400">
          <span className="text-gray-500">{">"}</span>
          <h2 className="font-bold tracking-tight">whoami</h2>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-3 h-8 md:h-10 bg-blue-500"
          ></motion.span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* TECH SIDE CARD */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -10 }}
          className="group bg-white bg-opacity-5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/80 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-colors duration-300 z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/30 transition-colors">
              <i className="fa-solid fa-code-branch text-blue-500 group-hover:text-blue-300"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-100">Technical Soul 👩‍💻</h3>
          </div>
          
          <div className="space-y-4 text-gray-400 leading-relaxed text-base md:text-lg">
            <p>
              I am genuinely excited about making products that have real-world users. While I’ve spent a lot of time working across the full stack, I usually find myself greatly inclined towards <span className="text-blue-400 font-medium">backend</span>.
            </p>
            <p>
              Apart from that, the 'aha!' moment after a long struggle over a complex DSA problem really builds my confidence. 
            </p>
            <p>
              I am more than enthusiastic to learn new tools and technologies because, nothing beats the feeling of seeing a project I built from scratch finally come to life.
            </p>
          </div>
        </motion.div>

        {/* PHILOSOPHICAL SIDE CARD */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -10 }}
          className="group bg-white bg-opacity-5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/80 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-colors duration-300 flex flex-col justify-between z-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                <i className="fa-solid fa-brain text-purple-500 group-hover:text-purple-300"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-100">Pinch of philosophy ✨</h3>
            </div>
            
            <div className="space-y-4 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                I truly believe that learning is a never-ending process, and hence, am always ready to pick up something new from the people around me.
              </p>
              <p>
                I do enjoy facing my fears, instead of running from them, and then finally emerging victorious and coming out stronger :).
              </p>
              <p>
                Below is the mantra I follow for my life:
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 group-hover:border-purple-500/50 transition-colors">
            <p className="text-purple-400 font-medium italic text-lg leading-snug">
              "Hope for the best and be prepared for the worst."
            </p>
            <span className="text-sm text-gray-500 mt-2 block">— Maya Angelou</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;