import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "motion/react";

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* MODAL CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a10]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-violet-500/20 z-10"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer border border-white/10 z-20"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>

          {/* GRID CONTENT */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center mt-2">
            {/* LEFT: DESCRIPTION & ACTIONS */}
            <div className="w-full md:w-1/2 flex flex-col justify-between order-2 md:order-1 text-center md:text-left">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                  {project.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-violet-500/15 text-violet-300 border border-violet-500/30 text-xs sm:text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="glass-btn-primary w-full sm:w-auto px-6 py-3 rounded-full text-white font-bold cursor-pointer flex items-center justify-center gap-2">
                      Visit Website{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
                    </button>
                  </a>
                ) : (
                  <button
                    disabled
                    aria-disabled="true"
                    className="glass-btn-secondary opacity-50 cursor-not-allowed w-full sm:w-auto px-6 py-3 rounded-full text-gray-400 font-semibold flex items-center justify-center gap-2 border-white/10"
                  >
                    Visit Website{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
                  </button>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="glass-btn-secondary w-full sm:w-auto px-6 py-3 rounded-full text-white font-bold cursor-pointer flex items-center justify-center gap-2">
                      <FontAwesomeIcon icon={faGithub} />
                      Source Code
                    </button>
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2 flex items-center justify-center order-1 md:order-2 shadow-inner">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-72 sm:max-h-80 object-contain rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;
