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
    icon: <FontAwesomeIcon icon={faGraduationCap} />
  },
  {
    year: "2025",
    title: "Digital Data Systems | Intern",
    description:
      "Worked as an intern at Digital Data Systems, where I learned web development and gained hands-on experience in building websites.",
    icon: <FontAwesomeIcon icon={faReact} />
  },
];

function ExperienceTimeline() {
  return (
    <div className="flex flex-col items-center mt-12 px-4" id="experience">

      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12">
        My Experience
      </h2>

      <div className="relative w-full max-w-5xl">

        {/* Line → left on mobile, center on desktop */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-1 bg-gray-600 h-full"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-start md:items-center w-full ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >

            {/* ICON + YEAR */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">

              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-4 border-gray-400 bg-gray-800 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl">
                {exp.icon}
              </div>

              <span className="mt-2 text-gray-400 text-sm sm:text-base">
                {exp.year}
              </span>
            </div>

            {/* CARD */}
            <div
              className={`
                bg-gray-700 text-white rounded-lg shadow-lg p-5 sm:p-6
                 ml-16 md:ml-0
                md:w-[42%]
              `}
            >
              <h3 className="font-bold text-base sm:text-lg">{exp.title}</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                {exp.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default ExperienceTimeline;
