import React from "react";

function Cards({ title, image, description, tags }) {
  return (
    <div className="
      bg-gray-600 
      w-full max-w-4xl 
      mx-auto
      rounded-xl 
      flex flex-col md:flex-row
      gap-4 md:gap-6
      shadow-lg hover:shadow-2xl
      transition p-4
    ">

      {/* IMAGE (TOP ON MOBILE, RIGHT ON DESKTOP) */}
      <div className="
        w-full md:w-1/2 
        h-48 sm:h-56 md:h-auto
        rounded-lg overflow-hidden
        flex items-center justify-center
        order-1 md:order-2
      ">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-contain
            hover:scale-105 transition-transform duration-300
          "
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="
        flex-1 flex flex-col justify-center
        text-center md:text-left
        order-2 md:order-1
      ">

        <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">
          {title}
        </h2>

        <p className="text-gray-300 mb-4 text-sm sm:text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-black text-white text-xs sm:text-sm px-3 py-1 rounded-full font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Cards;
