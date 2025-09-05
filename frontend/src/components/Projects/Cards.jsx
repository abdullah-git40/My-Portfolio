import React from "react";
function Cards({title , image , description, tags}) {
  return (
    <>
      <div className="bg-gray-600 w-1/2 h-[40vh] rounded-xl flex flex-col md:flex-row  gap-6 shadow-lg hover:shadow-2xl transition">
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-white text-2xl font-bold mb-2 p-4 pb-0">
            {" "}
            {title}
            {" "}
          </h2>
          <p className="text-gray-300 mb-4 pl-4">
           {description}
          </p>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start p-4">
            {tags.map((tag) => (

            <span className="bg-black text-white text-sm px-4 py-1 rounded-full font-semibold">
                {tag}
            </span>
            ))}
          </div>
        </div>

        <div className="w-3/5 h-full flex rounded-lg items-end justify-end overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
}

export default Cards;
