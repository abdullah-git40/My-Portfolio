import { useState, useEffect } from "react"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import ExperienceTimeline from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import { motion } from "motion/react"

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-[2px] z-[100] bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-300 transition-[width] duration-75 ease-linear"
      aria-hidden="true"
    />
  )
}

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Home />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Projects />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <ExperienceTimeline />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Contact />
      </motion.div>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-8 mt-8 border-t border-white/5">
        © {new Date().getFullYear()} Muhammad Abdullah · Built with{" "}
        <span className="text-violet-400">React</span> &{" "}
        <span className="text-violet-400">Tailwind</span>
      </footer>
    </>
  )
}

export default App

