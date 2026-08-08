import React from "react";
import pfp from "../../assets/pfp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
import CV from "../../assets/CV.pdf";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center mt-9 gap-6 px-4"
      id="home"
    >
      {/* PROFILE IMAGE */}
      <motion.div
        className="rounded-full overflow-hidden border-4 border-violet-500/40 shadow-xl shadow-violet-500/20"
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
          alt="Muhammad Abdullah — Front-End Developer"
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

      {/* AVAILABILITY BADGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.35, duration: 0.4 } }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <span className="
          inline-flex items-center gap-2
          px-4 py-1.5 rounded-full
          bg-emerald-500/10 border border-emerald-500/30
          text-emerald-400 text-xs sm:text-sm font-semibold
          backdrop-blur-md
        ">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for opportunities
        </span>
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
          Hi, I'm <span className="text-violet-400">Abdullah</span>.
        </span>

        <span className="block">
          I'm a developer with <span className="text-violet-400">2+ years</span> of experience.
        </span>

        <span className="block">
          I enjoy building sites, and my focus is{" "}
          <span className="text-violet-400 font-semibold">React & Dotnet</span>.
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
          <button className="glass-btn-primary p-3 px-7 sm:px-9 rounded-full font-bold text-white cursor-pointer flex items-center gap-2">
            Contact me <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </a>

        <a href={CV} download="Muhammad-Abdullah-CV.pdf">
          <button className="glass-btn-secondary p-3 px-7 sm:px-9 rounded-full font-bold text-white cursor-pointer flex items-center gap-2">
            My Resume <FontAwesomeIcon icon={faFileArrowDown} />
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-abdullah-0a37a3381/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            aria-label="Visit my LinkedIn profile"
            className="glass-btn-secondary p-3 px-5 rounded-full font-bold text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </a>

        <a
          href="https://github.com/abdullah-git40"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            aria-label="Visit my GitHub profile"
            className="glass-btn-secondary p-3 px-5 rounded-full font-bold text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>
      </div>

      {/* DIVIDER */}
      <div className="w-1 h-14 sm:h-16 bg-gradient-to-b from-violet-500/50 via-violet-400/20 to-transparent rounded-full my-10"></div>
    </div>
  );
}

export default Home;

