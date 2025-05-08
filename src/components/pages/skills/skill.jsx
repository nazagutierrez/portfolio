import React from "react";

function Skill({ image, title }) {
  return (
    <div className="text-white text-center flex flex-col justify-center items-center">
      <div className="skill-img-container bg-[#1f1f1f] py-2 px-6 rounded-sm">
        <img
          src={image}
          className="map-img my-2"
          alt={title}
        />
      </div>
      <h3 className="text-black mt-1 skill-title">{title}</h3>
    </div>

  );
}

export default Skill;
