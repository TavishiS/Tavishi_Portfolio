import React from "react";
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoGithub,
  IoConstructOutline,
  IoServerOutline,
  IoCodeSlashOutline,
} from "react-icons/io5";
import {
  SiCplusplus,
  SiFlask,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGooglecolab,
  SiGooglecloud,
} from "react-icons/si";

import skillful_emoji from "../assets/skillful_emoji.png";

const Skills = () => {
  return (
    <div id='Skills' className="text-white md:flex overflow-hidden items-start bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      
      {/* Left: Image */}
      <div className="mb-10 md:mb-0 md:mr-12 flex justify-center">
        <img src={skillful_emoji} alt="Skills Emoji" className="h-72 md:h-96 rounded-2xl shadow-lg" />
      </div>

      {/* Right: Skills Content */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl md:text-4xl font-bold mb-16">Skills 💻</h2>

        <div className="space-y-10">
          {/* Programming */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
              <IoCodeSlashOutline className="text-yellow-400" size={28} />
              Programming
            </h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <SiCplusplus className="text-blue-500" size={24} />
                <span>C++</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoPython className="text-yellow-300" size={24} />
                <span>Python</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoJavascript className="text-yellow-400" size={24} />
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          {/* Web Skills */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
              <IoLogoHtml5 className="text-orange-500" size={28} />
              Web Development
            </h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <SiFlask className="text-gray-200" size={24} />
                <span>Flask</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoHtml5 className="text-orange-500" size={24} />
                <span>HTML</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoCss3 className="text-blue-500" size={24} />
                <span>CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <SiDjango className="text-green-600" size={24} />
                <span>Django</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoReact className="text-cyan-400" size={24} />
                <span>React</span>
              </div>
            </div>
          </div>

          {/* Database Skills */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
              <IoServerOutline className="text-green-300" size={28} />
              Database Management
            </h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <SiMysql className="text-blue-600" size={24} />
                <span>MySQL</span>
              </div>
              <div className="flex items-center gap-2">
                <SiMongodb className="text-green-500" size={24} />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3">
              <IoConstructOutline className="text-pink-400" size={28} />
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <IoLogoGithub className="text-white" size={24} />
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <SiGooglecolab className="text-yellow-400" size={24} />
                <span>Google Colab</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <SiGooglecloud className="text-blue-400" size={24} />
                <span>Google Cloud</span>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
