import React from "react";
import { useTranslation } from "react-i18next";
import imageImp from "../../../images/imgExports";
import ExpTech from "./ExpTech";
import '@justinribeiro/lite-youtube';

let cards = [
  {
    id: "tpeo",
    title: "TPEOficial",
    videoUrl: "qkA1QbCKzRg",
    period: "2024 - Present",
    url: "https://github.com/TPEOficial",
    image: imageImp.tpeo,
  },
  {
    id: "no-country",
    title: "No country",
    videoUrl: "DjSyUzYUuTM",
    period: "2023 - 2024",
    url: "https://github.com/No-Country-simulation",
    image: imageImp.noCountry,
  },
  {
    id: "mens-house-barber",
    title: "Men's House barber",
    videoUrl: "1_Gtg7te6B8",
    period: "2022 - 2023",
    url: "https://github.com/nazagutierrez/mens-house-barber",
    image: imageImp.mensHouseLogo,
  },
];

function Cards() {
  const [t] = useTranslation("global");
  return (
    <>
      <section className="w-full flex justify-center px-2 cards-section">
      <div className="timeline-line relative flex flex-col gap-[50px]">
        {cards.map((card, index) => (
          <div className="flex items-start justify-center gap-5" key={index}>
            <div className="flex flex-col items-start justify-center max-w-[800px]">
              <h2 className="bg-black-main px-2 rounded mb-2 text-gray-main text-sm">
                {t(`experience.exp-period-${index}`)}
              </h2>
              <a href={card.url} className="flex items-center mb-2 exp-link" target="_blank" rel="noreferrer">
                <img className="exp-card-img me-2 sm:hidden rounded" src={card.image} alt="tpeo" />
                <h2 className="timeline-circle relative">{card.title}</h2>
                <svg className="text-black-main text-xl ms-2 inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353.75.75 0 0 0-1.18.928 5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061l3-3Z"></path>
                  <path d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353.75.75 0 0 0 1.18-.928 5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568l3.627-3.627Z"></path>
                </svg>
              </a>
              <div className="flex items-center">
                <img className="exp-card-img hidden sm:block" src={card.image} alt="tpeo" />
                <div className="flex flex-col items-center ps-4">
                  <p className="fs-6 exp-description leading-6 mb-4">
                    {t(`experience.exp-description-${index}`)}
                  </p>
                  <ExpTech expName={card.id} />
                </div>
              </div>
            </div>
            <div className="w-[20vw] self-center rounded-sm overflow-hidden">
              <lite-youtube videoid={card.videoUrl}>
                <a className="lite-youtube-fallback" href={`https://youtu.be/${card.videoUrl}`}>Watch on YouTube</a>
              </lite-youtube>
            </div>
          </div>
        ))}
      </div>
      </section>

      <div className="flex text-center justify-center mt-3 mb-10 px-3 text-black-main/70">
        {t("experience.more-projects")}
      </div>
    </>
  );
}

export function Title() {
  const [t] = useTranslation("global");
  return (
    <div>
      <h1 className="flex text-title mt-10 justify-center text-center underline-black">
        {t("experience.exp-title")}
      </h1>
    </div>
  );
}

export default Cards;
