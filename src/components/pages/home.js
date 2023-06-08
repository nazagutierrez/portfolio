import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import resumeES from '../../resumes/curriculumES.pdf';
import resumeEN from '../../resumes/curriculumEN.pdf';

const Nav = () => {
  const [t] = useTranslation("global");
  return (
    <div>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="navbar navbar-expand fixed-top d-none d-sm-block"
      >
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white fs-6" href="#Home">
                {t("home.nav-link-1")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-6" href="#Projects">
                {t("home.nav-link-2")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-6" href="#About">
                {t("home.nav-link-3")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-6" href="#Skills">
                {t("home.nav-link-4")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-6" href="#Contact">
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
        className="d-flex justify-content-center text-center text-white mt-5-md"
      >
        Nazareno Gutierrez
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="d-flex justify-content-center text-center text-white fst-italic fs-5"
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
      <p className="d-flex justify-content-center text-center text-white mt-5">
        {t("home.description")}
      </p>
      <div className="d-flex gap-2">
        <a
          className="text-white btn-primary rounded-1 px-3 py-1 border-0"
          href={resumeEN} target="_blank"
        >
          Resume EN
        </a>
        <a
          className="text-white btn-primary rounded-1 px-3 py-1 border-0"
          href={resumeES} target="_blank"
        >
          Resume ES
        </a>
      </div>
    </>
  );
}

export default Nav;
