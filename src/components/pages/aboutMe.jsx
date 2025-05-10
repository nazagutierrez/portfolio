import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import images from "../../images/imgExports";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  const [t] = useTranslation("global");
  return (
    <div className="h-full xl:mx-40 flex flex-col xl:flex-row selectable-yellow justify-center items-center text-center sm:gap-10 my-4 mb-10 sm:mb-4" ref={ref} id="About">
      <picture className="w-[60%] sm:w-1/3">
        <img
          src={images.noBgProfile}
          alt="profile"
          className="rounded-full w-full lg:mr-5 object-cover"
        />
      </picture>
      <div className="lg:w-2/3 sm:px-5 md:px-10 px-2 flex flex-col mt-5 text-white-main">
        <h3 className="text-title text-center underline-yellow"> 
          {t("about.title")}
        </h3>
        <p className="mt-3 text-center">
          {t("about.description-a")}
          <span className="text-yellow-main brightness-110">{" "}{t("about.description-b")}{" "}</span>
          {t("about.description-c")}
        </p>
        <p className="mt-4 text-center">
          {t("about.description2-a")}
          <span className="text-yellow-main brightness-110">{" "}{t("about.description2-b")}{" "}</span>
          {t("about.description2-c")}
        </p>
        <p className="mt-2 text-center">
          {t("about.description3")}
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
