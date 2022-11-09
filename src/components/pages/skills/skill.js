import React from "react";

function Skill({ image, title }) {
  return (
    <div>
      <div className="text-white text-center justify-content-center">
        <img
          src={image}
          className="img-thumbnail map-img bg-dark border-0 rounded-circle"
          alt={title}
        ></img>
        <div>
          <p className="fw-light">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
