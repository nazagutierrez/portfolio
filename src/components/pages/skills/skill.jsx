import React from "react";

function Skill({ image, title }) {
  return (
    <div className="text-white-main text-center w-full flex flex-col justify-center items-center">
      <div className="skill-hover-effect bg-bg-black py-2 px-6 rounded-sm">
        <img
          src={image}
          className="my-2 w-[100px] h-16 object-contain"
          alt={title}
        />
      </div>
      <h3 className="text-black-main mt-1 font-medium max-w-[140px]">{title}</h3>
    </div>

  );
}

export default Skill;
