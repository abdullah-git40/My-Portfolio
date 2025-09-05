import React from 'react'
import Cards from './Cards'
import image1 from "../../assets/image.png";
import image2 from "../../assets/image1.png";

function Projects() {

    const cardsData = [
        {
            id: 1  , 
            title: "🪶NodeNest",
            description: "A modern blog platform where users can read, write, and share blogs. Admins manage categories and oversee user posts.",
            image: image1,
            tags : ["React" , "MongoDB" , "Node.js"]
        },
        {
            id: 2  , 
            title: "E-commerce",
            description: "An e-commerce platform with product listings, cart, authentication, and secure checkout functionality.",
            image: image2,
            tags : ["React" , "MongoDB" , "Node.js"]
        },

    ]

  return (
    <>
    <div className='text-white font-bold text-3xl mb-4 text-center mt-9 ' id='projects'>My Projects</div>
    <div className='flex justify-center items-center gap-6 flex-col w-full h-full mt-10 '>
        
        {cardsData.map((card)=>(
            <Cards key={card.id} title={card.title} description={card.description} image={card.image} tags={card.tags}/>
        ))}
        
    </div>
    </>
  )
}

export default Projects