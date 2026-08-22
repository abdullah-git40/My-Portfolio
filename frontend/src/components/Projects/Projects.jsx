import React, { useState } from 'react'
import Cards from './Cards'
import ProjectModal from './ProjectModal'
import image1 from "../../assets/image.png";
import image2 from "../../assets/image1.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const cardsData = [
    {
      id: 2,
      title: "E-commerce",
      description: "An e-commerce platform with product listings, cart, authentication, and secure checkout functionality.",
      image: image2,
      tags: ["React", "MongoDB", "Node.js"],
      liveUrl: "http://ec2-13-53-36-107.eu-north-1.compute.amazonaws.com/",
      githubUrl: "https://github.com/abdullah-git40/E-commerce.git",
    },
    {
      id: 1,
      title: "🪶NodeNest",
      description: "A modern blog platform where users can read, write, and share blogs. Admins manage categories and oversee user posts.",
      image: image1,
      tags: ["React", "MongoDB", "Node.js"],
      liveUrl: null,
      isLiveDisabled: true,
      githubUrl: "https://github.com/abdullah-git40",
    },
  ];

  return (
    <div id="projects" className="pt-9">
      <div className='text-white font-bold text-3xl mb-4 text-center'>My Projects</div>
      <p className='text-gray-400 text-center text-sm mb-6'>Click on any project to view details and live demo</p>
      <div className='flex justify-center items-center gap-6 flex-col w-full h-full'>
        {cardsData.map((card) => (
          <Cards
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            tags={card.tags}
            onClick={() => setSelectedProject(card)}
          />
        ))}
      </div>

      {/* PROJECT POP-UP MODAL */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default Projects