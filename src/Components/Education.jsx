import React from "react";
import { IoSchoolOutline } from "react-icons/io5";

const Education = () => {
  return (
    <div id='Education' className="text-white md:flex overflow-hidden items-centermd:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div className="ml-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-16">Education 📖</h2>
        <div className="space-y-8">
          {/* IIT Jodhpur */}
          <div className="flex gap-4 items-start">
            <IoSchoolOutline size={30} className="mt-1 text-[#7bb2ff]" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Indian Institute of Technology (IIT) Jodhpur
              </h3>
              <p className="text-md md:text-lg italic text-gray-300 mt-3">
                B.Tech in Computer Science and Engineering (2023 - Present)
              </p>
              <p className="text-sm md:text-base mt-2">
                Gained strong foundations in Data structures, Algorithms, Web
                development and Software Engineering. I also developed communication and socializing skills here and owe a lot to my college...
              </p>
            </div>
          </div>

          {/* School */}
          <div className="flex gap-4 items-start">
            <IoSchoolOutline size={30} className="mt-1 text-[#7bb2ff]" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Girls' High School & College, Prayagraj (GHS&C)
              </h3>
              <p className="text-md md:text-lg italic text-gray-300 mt-3">
                Class 10th, ICSE Board (2019 - 2020)
              </p>
              <p className="text-sm md:text-base mt-2">
                Scored 97% in ICSE Class 10th Board Examinations, with a score of 100/100 in Computer Science. This was when I started developing interest in coding and Computer Science.
              </p>
              <br></br>
              <p className="text-md md:text-lg italic text-gray-300">
                Class 12th, ISC Board (2020 - 2022)
              </p>
              <p className="text-sm md:text-base mt-2">
                Scored 99.5% in ISC Class 12th Board Examinations, with a score of 100/100 in Computer Science, Mathematics and Chemistry.
                I was blessed to have been honoured by the Chief Minister of Uttar Pradesh, Shri Yogi Aadityanath Ji, for securing an All India Rank 2 in my ISC Class 12th Board Examinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
