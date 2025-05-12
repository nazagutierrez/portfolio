import React from "react";
import imgExports from "../../../images/imgExports";

const TechCard = ({ img, alt }) => {
  return (
    <span className="bg-black-main rounded-md p-1">
      <img src={img} className="w-4 object-contain" alt={alt} />
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
    <div className="flex justify-start items-start w-full gap-1 flex-wrap">
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
