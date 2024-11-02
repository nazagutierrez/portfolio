import React from "react";
import imgExports from "../../../images/imgExports";

const TechCard = ({ img, alt, className = "exp-tech-img" }) => {
  return (
    <span style={{ padding: "4px" }} className="bg-dark rounded-1 d-inline-flex align-items-center">
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
    <div className="d-flex align-items-start w-100 gap-1 flex-wrap">
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
