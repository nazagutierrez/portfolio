import { useTranslation } from "react-i18next";
import resumeES from "../../../resumes/curriculumES.pdf";
import resumeEN from "../../../resumes/curriculumEN.pdf";
import { svgRender } from "../../utils/svgRender";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const [t] = useTranslation("global");
  const sectionRef = useRef();
  const mainRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll animation
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }).to(mainRef.current, {
        opacity: 0.5,
        y: 950,
        ease: "none",
      });

      // Intro animation (reemplazo de Framer Motion)
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 0.8 }
      );

      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="Home" ref={sectionRef} className="selectable-yellow text-center">
      <div ref={mainRef}>
        <h1
          ref={titleRef}
          className="flex justify-center px-2 text-center mb-2 text-white-main mt-5 lg:mt-32 text-4xl sm:text-5xl"
        >
          Nazareno Gutierrez
        </h1>
        <p
          ref={subtitleRef}
          className="flex justify-center mb-4 sm:mb-14 text-center text-gray-main italic text-base sm:text-xl font-light"
        >
          {t("home.frontend")}
        </p>

        <p className="text-white-main mb-1 px-2">
          {t("home.description-1")}
          <span className="text-yellow-main brightness-110">
            {t("home.description-2")}
          </span>
          {t("home.description-3")}
        </p>

        <p className="flex justify-center text-center text-white-main px-2">
          {t("home.challenges")}
        </p>

        <h4 className="flex items-center justify-center gap-1 text-center mt-8 text-gray-main text-sm">
          <span>{t("home.description-4")}</span>
          <i className="rotate-180 opacity-70 flex items-center justify-center">
            {svgRender("doubleArrowUp")}
          </i>
        </h4>

        <div className="flex gap-2 flex-wrap justify-center mt-2">
          <a
            className="main-btn pointer text-sm sm:text-base px-1 sm:px-3 py-1 font-medium rounded-tr-md rounded-bl-md"
            href={resumeEN}
            target="_blank"
            rel="noreferrer"
          >
            Resume EN
          </a>
          <a
            className="main-btn text-sm sm:text-base px-1 sm:px-3 py-1 font-medium rounded-tr-md rounded-bl-md"
            href={resumeES}
            target="_blank"
            rel="noreferrer"
          >
            Resume ES
          </a>
        </div>
      </div>
    </section>
  );
}
