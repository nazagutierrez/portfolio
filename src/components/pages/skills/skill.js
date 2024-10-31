import React from "react";

function Skill({ image, title }) {
  return (
    <div className="text-white text-center justify-content-center">
      <div className="skill-img-container bg-dark py-2 p-3 rounded-1">
        <img
          src={image}
          className="map-img my-2"
          alt={title}
        ></img>
      </div>
      <h3 className="text-black mt-1 skill-title">{title}</h3>
    </div>
  );
}

export default Skill;
