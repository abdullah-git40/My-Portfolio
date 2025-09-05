import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const experiences = [
  {
    year: "2024",
    title: "Infomation Technology University (ITU)",
    description:
      "Started my Software Engineering degree at Information Technology University, building a strong foundation in technology and problem-solving.",
   icon : <FontAwesomeIcon icon={faGraduationCap} />
  },
  {
    year: "2025",
    title: "Digital Data Systems | Intern",
    description:
     " Worked as an intern at Digital Data Systems, where I learned web development and gained hands-on experience in building websites.",
    icon : <FontAwesomeIcon icon={faReact} /> 
  },
];

function ExperienceTimeline() {
  return (
    <div className="flex flex-col items-center mt-12" id="experience">
      <h2 className="text-3xl font-bold text-white mb-12">My Experience</h2>

      <div className="relative w-full max-w-4xl">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            
            <div
              className={`relative bg-gray-700 text-white rounded-lg shadow-lg p-6 w-80`}
            >
              <h3 className="font-bold text-lg">{exp.title}</h3>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>

            
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-4 border-gray-400 bg-gray-800 flex items-center justify-center text-white text-3xl">
                
                
                {exp.icon}
              </div>
              <span className="mt-2 text-gray-400">{exp.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
