import React from 'react'

function About() {
  return (
    <div className='items-center justify-center flex flex-col mt-9 gap-5  ' id='about'>
        <h1 className='text-white text-3xl font-bold'>
        About Me
        </h1>
              <p className="text-white text-lg leading-relaxed w-3/4 text-center">
        Hi, I’m <span className="text-yellow-400 font-bold">Abdullah</span>, a passionate{" "}
        <span className="text-green-400">front-end developer</span> who enjoys turning
        ideas into interactive and user-friendly web experiences. With a growing focus
        on <span className="text-blue-400">React</span>, I’ve spent the past few months
        building projects that sharpen my skills in modern web development.
        <br />
        <br />
        I love writing clean, maintainable code and experimenting with new technologies.
        My goal is to craft websites and applications that not only{" "}
        <span className="italic">look great</span> but also{" "}
        <span className="italic">perform efficiently</span>.
        <br />
        <br />
        When I’m not coding, you’ll probably find me exploring new design inspirations,
        learning the latest updates in the tech world, or brainstorming ideas for my
        next project.
      </p>
    </div>
  )
}

export default About