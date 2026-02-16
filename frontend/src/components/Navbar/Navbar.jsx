import React, { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full">

      {/* NAV CONTAINER */}
      <div className="px-4 pt-4">

        {/* DESKTOP NAV */}
        <div className="hidden md:block">
          <ul className="
            flex justify-center gap-8 lg:gap-12
            text-white py-3 px-6 lg:px-8
            rounded-full border border-white
            max-w-3xl mx-auto
            backdrop-blur-md bg-black/40
          ">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* MOBILE BAR */}
        <div className="
          md:hidden flex justify-between items-center
          text-white py-3 px-5 rounded-full border border-white
          backdrop-blur-md bg-black/40
        ">
          <span className="font-bold">Menu</span>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN (ABSOLUTE) */}
      {open && (
        <div className="
          md:hidden absolute left-0 top-full w-full px-4 pt-2
        ">
          <div className="
            rounded-2xl border border-white
            backdrop-blur-md bg-black/60
          ">
            <ul className="flex flex-col text-white text-center py-4 gap-4">

              <li><a href="#home" onClick={()=>setOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={()=>setOpen(false)}>About</a></li>
              <li><a href="#projects" onClick={()=>setOpen(false)}>Projects</a></li>
              <li><a href="#skills" onClick={()=>setOpen(false)}>Skills</a></li>
              <li><a href="#experience" onClick={()=>setOpen(false)}>Experience</a></li>
              <li><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></li>

            </ul>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
