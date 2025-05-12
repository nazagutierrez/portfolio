import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import imageImp from "../../../images/imgExports";
import ExpTech from "./ExpTech";
import "@justinribeiro/lite-youtube";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { svgRender } from "../../utils/svgRender";
import placeholder from "../../../images/placeholder.webp";

gsap.registerPlugin(ScrollTrigger);

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

function WorkExperience() {
  const titleRef = useRef();
  const expRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      expRef.current,
      { x: -100 },
      {
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: expRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const [t] = useTranslation("global");
  return (
    <section
      className="relative overflow-hidden selectable-black bg-bg-yellow w-full flex flex-col pt-14 justify-center px-2"
      id="Experience"
    >
      <h1 className="text-title mb-14 justify-center text-center underline-black" ref={titleRef}>
        {t("experience.exp-title")}
      </h1>
      <div className="relative flex flex-col gap-6 sm:gap-12" ref={expRef}>
        {cards.map((card, index) => (
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-5" key={index}>
            <div className="flex flex-col ms-5 sm:ms-14 md:ms-32 xl:ms-0 timeline-line relative items-start justify-center max-w-[800px]">
              <h2 className="bg-black-main px-2 rounded mb-2 text-gray-main text-sm">
                {t(`experience.exp-period-${index}`)}
              </h2>
              <a
                href={card.url}
                className="flex items-center mb-2 exp-link"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="timeline-circle text-base md:text-xl lg:text-2xl relative">{card.title}</h2>
                <img
                  className="exp-card-img ms-2 w-7 sm:hidden rounded"
                  src={card.image}
                  alt="Brand logo mobile"
                />
                {svgRender("link")}
              </a>
              <div className="flex items-center">
                <img
                  className="exp-card-img w-24 hidden sm:block rounded"
                  src={card.image}
                  alt="Brand logo web"
                />
                <div className="flex flex-col items-center ps-4">
                  <p className="fs-6 exp-description font-medium sm:font-normal lg:leading-6 mb-4">
                    {t(`experience.exp-description-${index}`)}
                  </p>
                  <ExpTech expName={card.id} />
                </div>
              </div>
            </div>
            <div className="w-2/3 md:w-[40%] xl:w-[20vw] self-center rounded-sm overflow-hidden">
              <lite-youtube videoid={card.videoUrl}>
                <img slot="image" src={placeholder} alt="Astro logo" />
                <a
                  className="lite-youtube-fallback"
                  href={`https://youtu.be/${card.videoUrl}`}
                >
                  Watch on YouTube
                </a>
              </lite-youtube>
            </div>
          </div>
        ))}
      </div>
      <div className="text-sm sm:text-lg sm:w-[60%] text-center mx-auto mt-10 mb-10 px-3 text-black-main/70">
        {t("experience.more-projects-1")}&nbsp;
        <a
          className="underline hover:shadow-[0px_20px_20px_-8px_rgba(43,127,255,0.3)] hover:text-black-main transition-all decoration-2 decoration-blue-500 underline-offset-4"
          href="https://www.linkedin.com/in/nazarenogutierrez1/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <span>&nbsp;{t("experience.more-projects-2")}&nbsp;</span>
        <a
          className="underline hover:shadow-[0px_20px_20px_-10px_rgba(0,0,0,0.2)] hover:text-black-main transition-all decoration-2 decoration-black/40 underline-offset-4"
          href="https://github.com/nazagutierrez"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
          <span>{t("experience.more-projects-3")}&nbsp;</span>
        <a
          className="underline hover:shadow-[0px_20px_20px_-8px_rgba(167,41,41,0.3)] hover:text-black-main transition-all decoration-2 decoration-red-500 underline-offset-4"
          href="https://youtube.com/playlist?list=PLnf-8UYWTL45814GHsETVxVhv-_XCO9QD&si=vDVidRguMvr62uEL"
          target="_blank"
          rel="noreferrer"
        >
          Youtube
        </a>
      </div>
    </section>
  );
}

export default WorkExperience;
