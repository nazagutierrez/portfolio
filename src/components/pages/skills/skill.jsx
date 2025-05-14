import React from "react";

function Skill({ image, title }) {
  return (
    <div className="text-white-main text-center w-full flex flex-col justify-center items-center">
      <div className="skill-hover-effect bg-bg-black py-2 px-6 rounded-sm">
        <img
          src={image}
          className="my-2 w-[50px] h-10 sm:w-[100px] sm:h-16 object-contain"
          alt={title}
        />
      </div>
      <h3 className="text-black-main mt-1 text-xs sm:text-base font-medium max-w-[110px]">{title}</h3>
    </div>

  );
}

export default Skill;
