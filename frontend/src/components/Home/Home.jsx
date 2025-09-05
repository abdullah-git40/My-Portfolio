import React from "react";
import pfp from "../../assets/pfp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
function Home() {
  return (
    <div
      className=" items-center justify-center flex flex-col mt-9 gap-5 "
      id="home"
    >
      <motion.div
        className="image  rounded-full overflow-hidden border-4 border-white shadow-xl "
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
          alt=""
          className="h-32 w-32 object-cover object-bottom hover:transform hover:scale-110 "
        />
      </motion.div>
      <div className="text-center w-3/4 mx-auto text-4xl leading-relaxed text-white font-bold">
        <span className="block">
          Hi, I'm <span className="text-yellow-400 font-bold">Abdullah</span>.
        </span>
        <span className="block">
          I'm a developer with <span className="text-blue-400">1+ year</span> of
          experience.
        </span>
        <span className="block">
          I enjoy building sites, and my focus is{" "}
          <span className="text-green-400 font-semibold">React</span>.
        </span>
      </div>
      <div className="btn text-white flex gap-4 ">
        <a href="#contact">
          <button className="p-3 px-9 border-none rounded-full font-bold cursor-pointer bg-gray-600 hover:scale-110 ">
            Contact me <FontAwesomeIcon icon={faArrowRight} />{" "}
          </button>
        </a>
        <a href="/CV.pdf" download="Muhammad_Abdullah_CV.pdf">
          <button className="p-3 px-9 border-none rounded-full font-bold cursor-pointer bg-gray-400 hover:scale-110 ">
            {" "}
            My Resume <FontAwesomeIcon icon={faFileArrowDown} />{" "}
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-abdullah-0a37a3381/"
          target="_blank"
        >
          <button className="p-3 px-5 border-none rounded-full font-bold cursor-pointer bg-gray-400 hover:scale-110 ">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </a>
        <button className="p-3 px-5 border-none rounded-full font-bold cursor-pointer bg-gray-400 hover:scale-110 ">
          <FontAwesomeIcon icon={faGithub} />{" "}
        </button>
      </div>
      <div className="width-1 h-16 bg-gray-400 rounded-full my-12 p-0.5"> </div>
    </div>
  );
}

export default Home;
