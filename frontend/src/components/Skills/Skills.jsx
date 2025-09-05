import React from 'react'
import { motion } from 'motion/react';
function Skills() {
    const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Github",
  "Tailwind",
  "Bootstrap",
  "Express",
  "MongoDB",
  "C++"
];

  return (
    <div className='text-white font-bold text-3xl mb-4 text-center mt-9 ' id='skills'>
        <div>My Skills</div>
        <div className="flex justify-center mt-8 " >
            <motion.ul className='flex flex-wrap justify-center gap-4 w-1/2 ' initial="hidden" whileInView="visible" viewport={{once : false , amount : 0.3}} variants={{
                visible : {
                    transition : {
                        staggerChildren : 0.2
                    }
                }
            }} >
                {skills.map((skill, index) => (
                    <motion.li key={index} className='bg-gray-600 p-3 rounded-xl text-2xl font-medium ' variants={{
                        hidden : {
                            opacity : 0 ,
                            y : 30
                        },
                        visible : {
                            opacity : 1,
                            y : 0
                        }
                    }}
                    transition={{
                        duration : 0.5
                    }} 
                     >{skill}</motion.li>
                ))}
                
            </motion.ul>
        </div>
    </div>
  )
}

export default Skills