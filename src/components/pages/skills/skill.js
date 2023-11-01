import React from "react";

function Skill({ image, title }) {
  return (
    <div>
      <div className="text-white text-center justify-content-center">
        <div className="skill-hover-effect">
          <img
            src={image}
            className="img-thumbnail object-fit-none map-img bg-dark border-0 rounded-circle"
            alt={title}
          ></img>
        </div>
        <h6 className="text-black skill-title">{title}</h6>
      </div>
    </div>
  );
}

export default Skill;
