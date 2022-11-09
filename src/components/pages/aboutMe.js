import React from "react";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const [t] = useTranslation("global");
  return (
    <div className="container">
        <div className="aboutme">
          <h4 className="d-flex mb-4 mt-3 fs-2 justify-content-center text-center text-white">
            {t("about.title")}
          </h4>
          <p className="text-white mt-3 d-flex justify-content-center text-center">
            {t("about.description")}
          </p>
        </div>
        <div className="container d-md-flex align-items-center justify-content-evenly mt-5">
          <div className="experience d-md-inline-block text-center mb-3 mb-md-0">
            <h4 className="text-white fw-light fst-italic">
              {t("about.experience-title")}
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent text-white border-light">{t("about.experience.exp1")}</li>
              <li className="list-group-item bg-transparent text-white border-light">{t("about.experience.exp2")}</li>
              <li className="list-group-item bg-transparent text-white border-light">{t("about.experience.exp3")}</li>
            </ul>
          </div>

          <div className="certificates d-md-inline-block text-center mb-3 mb-md-0">
            <h4 className="text-white fw-light fst-italic">
              {t("about.certificate-title")}
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent text-white  border-light"><a className="nav-link text-center" href="https://community.open-bootcamp.com/user/nazagutierrez/certificaciones/6d8b3294-5aea-477f-b74f-3c0ce5cb5e9b" target="_blank" rel="noreferrer">{t("about.certificate.html-css")}</a></li>
              <li className="list-group-item bg-transparent text-white border-light"><a className="nav-link text-center" href="https://community.open-bootcamp.com/user/nazagutierrez/certificaciones/f08e8681-8483-476b-8a87-08809e707861" target="_blank" rel="noreferrer">{t("about.certificate.git")}</a></li>
            </ul>
          </div>

          <div className="education d-md-inline-block text-center mb-3 mb-md-0">
            <h4 className="text-white fw-light fst-italic">
              {t("about.education-title")}
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent text-white border-light"><a className="nav-link text-center" href="https://www.linkedin.com/school/openbootcamp-escuela/" target="_blank" rel="noreferrer">{t("about.education.openbootcamp")}</a></li>
              <li className="list-group-item bg-transparent text-white border-light">{t("about.education.autodidact")}</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default AboutMe;
