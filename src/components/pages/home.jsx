import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import resumeES from "../../resumes/curriculumES.pdf";
import resumeEN from "../../resumes/curriculumEN.pdf";
import { svgRender } from "../utils/svgRender";

const Nav = () => {
  const [t] = useTranslation("global");
  return (
    <div className="relative w-auto h-full">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="fixed top-0 left-0 right-0 hidden sm:block backdrop-blur bg-black/10 h-12 z-10"
      >
        <div className="flex justify-center w-full h-full">
          <ul className="flex navbar-nav items-center space-x-6 text-white-main text-sm">
            <li className="nav-item">
              <a href="#Home" className="nav-link">
                {t("home.nav-link-1")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects" className="nav-link">
                {t("home.nav-link-2")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#About" className="nav-link">
                {t("home.nav-link-3")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#Skills" className="nav-link">
                {t("home.nav-link-4")}
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link">
                {t("home.nav-link-5")}
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export function Me() {
  const [t] = useTranslation("global");

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center text-center mb-2 text-white-main mt-32 text-5xl"
      >
        Nazareno Gutierrez
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex justify-center mb-14 text-center text-gray-main italic text-xl font-light"
      >
        {t("home.frontend")}
      </motion.p>
    </div>
  );
}

export function Description() {
  const [t] = useTranslation("global");
  return (
    <>
      <p className="text-white-main mb-1 px-2">
        {t("home.description-1")}
        <span className="text-yellow-main brightness-110">{t("home.description-2")}</span>
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
          className="main-btn px-3 py-1 font-medium rounded-tr-md rounded-bl-md"
          href={resumeEN}
          target="_blank"
          rel="noreferrer"
        >
          Resume EN
        </a>
        <a
          className="main-btn px-3 py-1 font-medium rounded-tr-md rounded-bl-md"
          href={resumeES}
          target="_blank"
          rel="noreferrer"
        >
          Resume ES
        </a>
      </div>
    </>
  );
}

export default Nav;
