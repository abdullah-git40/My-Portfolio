import React  from 'react'

function Navbar() {
  return (
     <nav className="sticky top-5 z-50 ">
      <ul className="flex justify-center gap-12 text-white py-4 px-8 rounded-full border border-white max-w-3xl mx-auto backdrop-blur-md ">
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#projects">Projects</a></li>
       <li><a href="#skills">Skills</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar