import React from "react";
import imgExports from "../../../images/imgExports";

const TechCard = ({ img, alt, className = "exp-tech-img" }) => {
  return (
    <span className="bg-black-main rounded-md inline-flex items-center p-1">
      <img src={img} className={className} alt={alt} />
    </span>
  );
};

const ExpTech = ({ expName }) => {
  const sharedTech = () => {
    let mapItems = [ "typescript", "reactImg", "jsImg", "tailwindcss", "gitImg", "cssImg" ];
    return (
      <>
        {mapItems.map((item) => {
          return <TechCard img={imgExports[`${item}`]} alt={item} />;
        })}
      </>
    );
  };

  return (
    <div className="flex items-start w-full gap-1 flex-wrap">
      {expName === "mens-house-barber" && (
        <>
          <TechCard img={imgExports.nextjs} alt="nextjs" />
          <TechCard img={imgExports.firebase} alt="firebase" />
        </>
      )}
      {expName === "no-country" ? "" : ""}
      {expName === "tpeo" && (
        <TechCard img={imgExports.astro} alt="firebase" />
      )}
      {sharedTech()}
    </div>
  );
};

export default ExpTech;
