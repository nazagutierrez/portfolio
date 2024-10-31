import React from "react";
import { useTranslation } from "react-i18next";
import imageImp from "../../../images/imgExports";
import Timeline from "./Timeline";
import imgExports from "../../../images/imgExports";
import ExpTech from "./ExpTech";

function linkSvg() {
  return (
    <svg style={{ fontSize: "1rem", color: "#2e2e2e9d", marginLeft: "8px" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353.75.75 0 0 0-1.18.928 5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061l3-3Z"></path><path d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353.75.75 0 0 0 1.18-.928 5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568l3.627-3.627Z"></path></svg>
  )
}

let cards = [
  {
    id: "tpeo",
    title: "TPEOficial",
    period: "2024 - Present",
    url: "https://github.com/TPEOficial",
    image: imageImp.tpeo,
  },
  {
    id: "no-country",
    title: "No country",
    period: "2023 - 2024",
    url: "https://github.com/No-Country-simulation",
    image: imageImp.noCountry,
  },
  {
    id: "mens-house-barber",
    title: "Men's House barber",
    period: "2022 - 2023",
    url: "https://github.com/nazagutierrez/mens-house-barber",
    image: imageImp.mensHouseLogo,
  },
];

function Cards() {
  const [t] = useTranslation("global");
  return (
    <>
      <section style={{ width: "100vw" }} className="d-flex justify-content-center px-2 cards-section">
        <Timeline />
        <div style={{gap: "50px"}} className="d-flex flex-column">
          {cards.map((card, index) => (
            <div
            style={{ maxWidth: "800px" }}
            key={index}
            className="d-flex flex-column align-items-start justify-content-center"
            >
              <h2 style={{ paddingBlock: "2px" }} className="bg-dark px-2 rounded-1 mb-2 exp-period">
                {t(`experience.exp-period-${index}`)}
              </h2> 
              <a href={card.url} className="d-flex align-items-center mb-2 exp-link" target="_blank" rel="noreferrer">
                <img className="exp-card-img me-2 d-sm-none rounded-1" src={card.image} alt="tpeo"/>
                {card.title}
                {linkSvg()}
              </a>
              <div className="d-flex align-items-center">
                <img className="exp-card-img d-none d-sm-block" src={card.image} alt="tpeo"/>
                <div className="d-flex flex-column align-items-center ps-4">
                  <p style={{ lineHeight: "29px", marginBottom: "15px"}} className="fs-6 exp-description">
                    {t(`experience.exp-description-${index}`)}
                  </p>
                  <ExpTech expName={card.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div
        style={{ color: "#292929da" ,fontSize: "0.9rem", marginBottom: "110px" }}
        className="d-flex text-center justify-content-center mt-3 px-3"
      >
        {t("experience.more-projects")}
      </div>
    </>
  );
}

export function Title() {
  const [t] = useTranslation("global");
  return (
    <div>
      <h1 className="d-flex fs-2 mt-4 mt-0-md justify-content-center text-center underline-black">
        {t("experience.exp-title")}
      </h1>
    </div>
  );
}

export default Cards;
