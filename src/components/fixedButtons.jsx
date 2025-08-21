import { useTranslation } from "react-i18next";
import { svgRender } from "./utils/svgRender";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const FixedButtons = () => {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
  }, []);

  const [, i18n] = useTranslation("global");

  return (
    <div
      ref={ref}
      className="flex-col text-white fixed bottom-2 sm:bottom-0 flex items-center justify-center gap-1 m-1 mb-2 xs:m-2 z-10"
    >
      <button
        className={`flex active:scale-95 will-change-transform hover:text-yellow-main text-[0.6rem] xs:text-sm items-center justify-center cursor-pointer w-7 h-7 p-1 xs:p-0 xs:w-10 xs:h-10 bg-[#2c2c2c] border border-[#2c2c2c] rounded-full transition-all ${i18n.resolvedLanguage === "en" && "bg-[#464646] border border-gray-main/40"}`}
        onClick={() => i18n.changeLanguage("en")}
        target="_blank"
        rel="noreferrer"
      >
        EN
      </button>
      <button
        className={`flex active:scale-95 will-change-transform hover:text-yellow-main text-[0.6rem] xs:text-sm items-center justify-center cursor-pointer w-7 h-7 p-1 xs:p-0 xs:w-10 xs:h-10 bg-[#2c2c2c] border border-[#2c2c2c] rounded-full transition-all ${i18n.resolvedLanguage === "es" && "bg-[#464646] border border-gray-main/40"}`}
        onClick={() => i18n.changeLanguage("es")}
        target="_blank"
        rel="noreferrer"
      >
        ES
      </button>
      <a
        className="flex active:scale-95 will-change-transform hover:text-yellow-main items-center justify-center cursor-pointer w-7 h-7 p-1 xs:p-0 xs:w-10 xs:h-10 bg-[#2c2c2c] rounded-full transition-all"
        href="https://www.linkedin.com/in/nazarenogutierrez1/"
        target="_blank"
        rel="noreferrer"
      >
        {svgRender("linkedin")}
      </a>
      <a
        className="flex active:scale-95 will-change-transform hover:text-yellow-main items-center justify-center cursor-pointer w-7 h-7 p-1 xs:p-0 xs:w-10 xs:h-10 bg-[#2c2c2c] rounded-full transition-all"
        href="https://wa.me/5492364329720?text=Hola!"
        target="_blank"
        rel="noreferrer"
      >
        {svgRender("chat")}
      </a>
    </div>
  );
};

export default FixedButtons;
