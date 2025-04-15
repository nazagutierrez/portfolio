import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import resumeES from "../../resumes/curriculumES.pdf";
import resumeEN from "../../resumes/curriculumEN.pdf";

const Nav = () => {
  const [t] = useTranslation("global");
  return (
    <div className="position-relative w-auto h-100">
      {/* <button className="position-absolute top start-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">|||</button>
      <div className="offcanvas offcanvas-end" tabindex="1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header text-white">
          <div id="offcanvasRightLabel"></div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <ul className="navbar-nav" style={{fontSize: "1.2rem"}}>
          <li className="nav-item">
            <a className="nav-link" href="#Home">
              {t("home.nav-link-1")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">
              {t("home.nav-link-2")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">
              {t("home.nav-link-3")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Skills">
              {t("home.nav-link-4")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              {t("home.nav-link-5")}
            </a>
          </li>
        </ul>
        </div>
      </div> */}
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
        style={{ marginTop: "100px" }}
        className="d-flex justify-content-center text-center text-white"
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
      <p className="d-flex justify-content-center text-center text-white mt-5 mb-1 px-2">
        {t("home.description-1")}
        <div className="year-text">{t("home.description-2")}</div>
        {t("home.description-3")}
      </p>
      <p className="d-flex justify-content-center text-center text-white px-2">
        {t("home.challenges")}
      </p>
      <h4 style={{color:"#818181"}} className="d-flex align-items-center justify-content-center text-center fs-6">
        <span className="">{t("home.description-4")}</span>
        <i style={{fontSize: "0.8rem"}} className="bi bi-arrow-down ms-2"> </i> 
      </h4>
      <div className="d-flex gap-2 flex-wrap justify-content-center">
        <a
          className="text-black text-center text-decoration-none fw-semibold btn-primary rounded-1 px-3 py-1 border-0"
          href={resumeEN}
          target="_blank"
          rel="noreferrer"
        >
          Resume EN
        </a>
        <a
          className="text-black text-center text-decoration-none fw-semibold btn-primary rounded-1 px-3 py-1 border-0"
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
