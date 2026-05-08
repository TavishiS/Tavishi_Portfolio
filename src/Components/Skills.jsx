import React from "react";
import { motion } from "framer-motion";
import { 
  IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoGithub,
  IoCodeSlashOutline, IoTerminalOutline, IoCloudUploadOutline, IoLayersOutline
} from "react-icons/io5";
import { 
  SiCplusplus, SiC, SiFlask, SiFastapi, SiFlutter, SiMongodb, 
  SiPostgresql, SiSqlite, SiFirebase, SiRender, SiLinux
} from "react-icons/si";
import skillful_emoji from "../assets/skillful_emoji.png";

const Skills = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, scale: 1, 
      transition: { duration: 0.5, staggerChildren: 0.1 } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const SkillBadge = ({ icon: Icon, name, color }) => (
    <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all cursor-default group my-5">
      <Icon className={`${color} group-hover:scale-110 transition-transform`} size={20} />
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );

  return (
    <motion.div
      id="Skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="text-white flex flex-col items-center justify-center bg-black bg-opacity-40 shadow-2xl mx-0 md:mx-20 rounded-3xl p-8 md:p-16 backdrop-blur-md overflow-hidden font-jakarta my-20"
    >
      {/* HEADER SECTION */}
      <motion.div className="w-full max-w-6xl mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="flex items-center gap-2 font-mono text-2xl md:text-4xl text-green-400">
          <span className="text-gray-500">{">"}</span>
          <h2 className="font-bold tracking-tight text-white">my_arsenal</h2>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-3 h-8 md:h-10 bg-green-500"
          ></motion.span>
        </div>
        <img 
          src={skillful_emoji} 
          alt="Skills Emoji" 
          className="h-24 md:h-32 object-contain animate-bounce-slow" 
          style={{ animationDuration: '4s' }}
        />
      </motion.div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        
        {/* LANGUAGES */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-white bg-opacity-5 p-6 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <IoCodeSlashOutline className="text-green-400" size={24} />
            <h3 className="font-bold text-lg">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={SiCplusplus} name="C++ (Proficient)" color="text-blue-500" />
            <SkillBadge icon={SiC} name="C" color="text-blue-400" />
            <SkillBadge icon={IoLogoPython} name="Python" color="text-yellow-400" />
          </div>
        </motion.div>

        {/* WEB & MOBILE */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-white bg-opacity-5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <IoLayersOutline className="text-blue-400" size={24} />
            <h3 className="font-bold text-lg">Web & Mobile</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={SiFlask} name="Flask" color="text-gray-100" />
            <SkillBadge icon={SiFastapi} name="FastAPI" color="text-emerald-400" />
            <SkillBadge icon={SiFlutter} name="Flutter" color="text-cyan-400" />
            <SkillBadge icon={IoLogoHtml5} name="HTML" color="text-orange-500" />
            <SkillBadge icon={IoLogoCss3} name="CSS" color="text-blue-500" />
            <SkillBadge icon={IoLogoJavascript} name="JS" color="text-yellow-300" />
          </div>
        </motion.div>

        {/* DATABASES */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-white bg-opacity-5 p-6 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <IoTerminalOutline className="text-emerald-400" size={24} />
            <h3 className="font-bold text-lg">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={SiSqlite} name="SQL" color="text-blue-400" />
            <SkillBadge icon={SiMongodb} name="MongoDB Atlas" color="text-green-500" />
            <SkillBadge icon={SiPostgresql} name="PostgreSQL" color="text-blue-300" />
          </div>
        </motion.div>

        {/* SYSTEMS & LOW LEVEL */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-white bg-opacity-5 p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <SiLinux className="text-orange-400" size={24} />
            <h3 className="font-bold text-lg">Systems</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={IoCodeSlashOutline} name="OOPs" color="text-purple-400" />
            <SkillBadge icon={IoTerminalOutline} name="Linux CLI" color="text-gray-300" />
            <SkillBadge icon={IoLayersOutline} name="File Handling" color="text-red-400" />
          </div>
        </motion.div>

        {/* CLOUD & DEPLOYMENT */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-white bg-opacity-5 p-6 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <IoCloudUploadOutline className="text-yellow-400" size={24} />
            <h3 className="font-bold text-lg">Cloud</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={SiFirebase} name="Firebase" color="text-orange-400" />
            <SkillBadge icon={SiRender} name="Render" color="text-blue-400" />
            <SkillBadge icon={IoLogoGithub} name="GitHub Actions" color="text-white" />
          </div>
        </motion.div>

        {/* COLLABORATION */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="bg-white bg-opacity-5 p-6 rounded-2xl border border-white/10 hover:border-gray-100/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <IoLogoGithub className="text-gray-100" size={24} />
            <h3 className="font-bold text-lg">Collab</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <SkillBadge icon={IoLogoGithub} name="GitHub" color="text-white" />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Skills;