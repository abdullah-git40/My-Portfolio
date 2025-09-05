import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import ExperienceTimeline from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import { motion } from "motion/react"



function App() {

  return (
    <>
    <Navbar/>
    <motion.div
    
    initial={{opacity : 0 , y : 50}}
        whileInView={{opacity : 1 , y : 0 , transition:{delay : 0.2 , duration : 0.5}}}
        viewport={{once : false , amount : 0.2}} 
        >
    

      <Home/>
    </motion.div>
    <motion.div
    
    initial={{opacity : 0 , y : 50}}
        whileInView={{opacity : 1 , y : 0 , transition:{delay : 0.2 , duration : 0.5}}}
        viewport={{once : false , amount : 0.2}} 
        >

      <About />
        </motion.div>
        <motion.div
    
    initial={{opacity : 0 , y : 50}}
        whileInView={{opacity : 1 , y : 0 , transition:{delay : 0.2 , duration : 0.5}}}
        viewport={{once : false , amount : 0.2}} 
        >

      <Projects/>
        </motion.div>
        <motion.div
    
    initial={{opacity : 0 , y : 50}}
        whileInView={{opacity : 1 , y : 0 , transition:{delay : 0.2 , duration : 0.5}}}
        viewport={{once : false , amount : 0.2}} 
        >

     <Skills/>
        </motion.div>
        <motion.div
    
    initial={{opacity : 0 , y : 50}}
        whileInView={{opacity : 1 , y : 0 , transition:{delay : 0.2 , duration : 0.5}}}
        viewport={{once : false , amount : 0.2}} 
        >

     <ExperienceTimeline />
        </motion.div>
        <motion.div
    
    initial={{opacity : 0 , y : 50}}
        whileInView={{opacity : 1 , y : 0 , transition:{delay : 0.2 , duration : 0.5}}}
        viewport={{once : false , amount : 0.2}} 
        >

     <Contact />
        </motion.div>
    </>
  )
}

export default App
