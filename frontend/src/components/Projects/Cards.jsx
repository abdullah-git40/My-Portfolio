import React from "react";

function Cards({ title, image, description, tags, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        bg-white/5 backdrop-blur-md 
        border border-white/10 hover:border-violet-500/40
        w-full max-w-4xl 
        mx-auto
        rounded-2xl 
        flex flex-col md:flex-row
        gap-4 md:gap-6
        shadow-lg hover:shadow-violet-500/15
        transition-all duration-300 p-5
        cursor-pointer group hover:-translate-y-1
      "
    >
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
            group-hover:scale-105 transition-transform duration-300
          "
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="
        flex-1 flex flex-col justify-center
        text-center md:text-left
        order-2 md:order-1
      ">
        <div className="flex items-center justify-center md:justify-between mb-2">
          <h2 className="text-white text-xl sm:text-2xl font-bold group-hover:text-violet-300 transition-colors">
            {title}
          </h2>
          <span className="text-xs text-violet-400 font-semibold hidden md:inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Details ↗
          </span>
        </div>

        <p className="text-gray-300 mb-4 text-sm sm:text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-violet-500/15 text-violet-300 border border-violet-500/30 text-xs sm:text-sm px-3 py-1 rounded-full font-medium"
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
