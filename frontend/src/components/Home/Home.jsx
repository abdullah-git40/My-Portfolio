import React from "react";
import pfp from "../../assets/pfp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center mt-9 gap-6 px-4"
      id="home"
    >
      {/* PROFILE IMAGE */}
      <motion.div
        className="rounded-full overflow-hidden border-4 border-white shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src={pfp}
          alt="profile"
          className="
            h-24 w-24 
            sm:h-28 sm:w-28 
            md:h-32 md:w-32 
            lg:h-36 lg:w-36
            object-cover object-bottom
            transition hover:scale-110
          "
        />
      </motion.div>

      {/* HERO TEXT */}
      <div
        className="
          text-center text-white font-bold leading-relaxed
          w-full max-w-3xl
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
        "
      >
        <span className="block">
          Hi, I'm <span className="text-yellow-400">Abdullah</span>.
        </span>

        <span className="block">
          I'm a developer with <span className="text-blue-400">1+ year</span> of experience.
        </span>

        <span className="block">
          I enjoy building sites, and my focus is{" "}
          <span className="text-green-400 font-semibold">React</span>.
        </span>
      </div>

      {/* BUTTONS */}
      <div
        className="
          flex flex-wrap justify-center gap-3 text-white
          w-full max-w-xl
        "
      >
        <a href="#contact">
          <button className="p-3 px-7 sm:px-9 rounded-full font-bold bg-gray-600 hover:scale-110 transition">
            Contact me <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </a>

        <a href="/CV.pdf" download="Muhammad_Abdullah_CV.pdf">
          <button className="p-3 px-7 sm:px-9 rounded-full font-bold bg-gray-400 hover:scale-110 transition">
            My Resume <FontAwesomeIcon icon={faFileArrowDown} />
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-abdullah-0a37a3381/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-3 px-5 rounded-full font-bold bg-gray-400 hover:scale-110 transition">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </a>

        <a
          href="hhttps://github.com/abdullah-git40"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-3 px-5 rounded-full font-bold bg-gray-400 hover:scale-110 transition">
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>
      </div>

      {/* DIVIDER */}
      <div className="w-1 h-14 sm:h-16 bg-gray-400 rounded-full my-10"></div>
    </div>
  );
}

export default Home;
