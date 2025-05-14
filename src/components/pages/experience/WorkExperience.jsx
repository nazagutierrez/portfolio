import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import imageImp from "../../../images/imgExports";
import ExpTech from "./ExpTech";
import "@justinribeiro/lite-youtube";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import placeholder from "../../../images/placeholder.webp";
import noCountryProof from "../../../images/noCountryProof.webp";

gsap.registerPlugin(ScrollTrigger);

let cards = [
  {
    id: "tpeo",
    title: "TPEOficial",
    videoUrl: "qkA1QbCKzRg",
    period: "2024 - Present",
    asset: "video",
    url: "https://dymo.tpeoficial.com/",
    image: imageImp.tpeo,
  },
  // {
  //   id: "nordicaps",
  //   title: "Nordicaps",
  //   videoUrl: "qkA1QbCKzRg",
  //   period: "2025 - Present",
  //   asset: "video",
  //   url: "https://dymo.tpeoficial.com/",
  //   image: imageImp.tpeo,
  // },
  {
    id: "no-country",
    title: "No country",
    videoUrl: "DjSyUzYUuTM",
    period: "2023 - 2024",
    asset: "image",
    url: noCountryProof,
    image: imageImp.noCountry,
  },
  {
    id: "mens-house-barber",
    title: "Men's House barber",
    videoUrl: "1_Gtg7te6B8",
    period: "2022 - 2023",
    asset: "video",
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
      // className="relative xs:h-[2000px] sm:h-[2500px] xl:h-[1400px] overflow-hidden selectable-black bg-bg-yellow w-full flex flex-col pt-14 justify-center px-2"
      className="relative overflow-hidden selectable-black bg-bg-yellow w-full flex flex-col pt-14 justify-center px-2"
      id="Experience"
    >
      <h1 className="text-title mb-14 justify-center text-center underline-black" ref={titleRef}>
        {t("experience.exp-title")}
      </h1>
      <div className="relative ms-5 md:ms-6 lg:ms-0 flex flex-col gap-6 sm:gap-14" ref={expRef}>
        {cards.map((card, index) => (
          <div className="flex flex-col xl:flex-row items-center justify-center gap-5" key={index}>
            <div className="flex flex-col xl:ms-0 timeline-line relative items-start justify-center max-w-[800px]">
              <h2 className="bg-black-main px-2 rounded mb-1 text-gray-main text-xs">
                {t(`experience.exp-period-${index}`)}
              </h2>
              <h2 className="timeline-circle text-base sm:text-xl lg:text-2xl relative">
                Frontend Developer
              </h2>
              <div className="flex text-xs sm:text-sm items-center justify-center mb-2">
                <h3>at&nbsp;</h3>
                <a href={card.url} target="_blank" rel="noreferrer" className="underline-black underline-offset-1">
                  {" "} {card.title}
                </a>
                <img
                  className="ms-1 w-4 rounded bg-black-main"
                  src={card.image}
                  alt="Brand logo mobile"
                />
              </div>
              <div className="flex flex-col items-center ps-4">
                <p className="text-pretty text-sm sm:text-base lg:leading-6 mb-2">
                  {t(`experience.exp-description-${index}`)}
                </p>
                <ExpTech expName={card.id} />
              </div>
            </div>
            <div className="w-2/3 md:w-1/2 lg:w-[40%] xl:w-[20vw] self-center">
              {card.asset === "image" ?
                <img src={card.url} className="aspect-video rounded-sm" alt="Image placeholder" />
                : 
                <div className="rounded-sm overflow-hidden"> 
                  <lite-youtube videoid={card.videoUrl}>
                    <img slot="image" src={placeholder} alt="Youtube video placeholder" />
                  </lite-youtube>  
                </div>
              }
              {card.asset === "video" ?
                <a 
                  href={card.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block text-center active:scale-95 hover:opacity-95 transition-all will-change-transform pt-px pb-0.5 md:pt-0 md:pb-px mx-auto text-white-main text-xs sm:text-sm md:text-base bg-black-main rounded-sm mt-2"
                >
                  <h2 className="tracking-wide visit-web-font group-hover:text-yellow-main/90 group-hover:decoration-yellow-main/90 transition-all underline decoration-1 decoration-white-main/60 underline-offset-3">
                    VISIT THE WEBSITE
                  </h2>
                </a>
                :
                <h2 className="tracking-wide bg-black-main rounded-sm mt-2 visit-web-font group-hover:text-yellow-main/90 group-hover:decoration-yellow-main/90 pt-px pb-0.5 md:pt-0 md:pb-px text-center text-white-main text-xs sm:text-sm md:text-base">
                  CERTIFICATE
                </h2>
              }
            </div>
          </div>
        ))}
      </div>
      <div className="text-sm sm:text-base sm:w-[60%] text-center mx-auto mt-12 mb-10 px-3 text-black-main/80">
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
