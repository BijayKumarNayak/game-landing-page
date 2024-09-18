import React, { useState } from "react";

const GameCard = ({ data }) => {
  const { title, type, cost, image } = data;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden rounded-lg w-80 md:w-60 lg:h-72 h-96 "
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      <img
        src={image}
        alt=""
        className={`object-center w-full h-full ${
          hovered
            ? "scale-125 duration-700 transition ease-in"
            : "duration-700 transition ease-out"
        } `}
      />
      <div
        className={`absolute top-0 left-0 right-0 z-0 w-full h-full   bg-gradient-to-t from-red-500 to-transparent  ${
          hovered
            ? "transition duration-500 ease-in opacity-0"
            : "opacity-80 transition duration-500 ease-out "
        }`}
      ></div>
      <div
        className={`absolute z-10 text-white left-5 bottom-5 ${
          hovered ? "hidden" : "block"
        } `}
      >
        <p className="text-lg font-semibold">{title}</p>
        <span className="flex items-center">
          {type}-{cost}
        </span>
      </div>
    </div>
  );
};

export default GameCard;
