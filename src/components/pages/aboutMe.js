import React from "react";
import { useTranslation } from "react-i18next";
import images from "../../images/imgExports";

function AboutMe() {
  const [t] = useTranslation("global");
  return (
    <div className="container d-lg-flex text-center mt-lg-0 my-5">
      <img
        src={images.noBgProfile}
        alt="profile"
        className="rounded-pill w-75 me-lg-5"
        style={{ objectFit: "cover"}}
      />
      <div className="d-flex justify-content-center flex-column mt-5">
        <div className="aboutme">
          <h3 className="fs-2 text-center text-white underline-yellow">
            {t("about.title")}
          </h3>
          <p className="text-white mt-3 text-center">
            {t("about.description-a")}
            {" "}
            <span className="text-warning">{t("about.description-b")}</span>
            {" "}
            {t("about.description-c")}
          </p>
          <p className="text-white mt-4 text-center">
            {t("about.description2-a")}
            {" "}
            <span className="text-warning">{t("about.description2-b")}</span>
            {" "}
            {t("about.description2-c")}
          </p>
          <p className="text-white mt-2 text-center">
            {t("about.description3")}
          </p>
        </div>
        {/* <div className=" d-md-inline-block align-items-center mt-5 d-md-inline-block text-center mb-3 mb-md-0 w-100">
            <h4 className="text-white fw-light fst-italic ms-lg-2">
              {t("about.experience-title")}
            </h4>
            <div className="d-flex justify-content-center align-items-center gap-3 flex-xl-nowrap flex-wrap">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent text-white border-warning">
                  {t("about.experience.exp1")} 
                </li>
                <li className="list-group-item bg-transparent text-white border-warning ">
                  {t("about.experience-description.exp1")}
                </li>
              </ul>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent text-white border-warning">
                  {t("about.experience.exp2")} 
                </li>
                <li className="list-group-item bg-transparent text-white border-warning ">
                  {t("about.experience-description.exp2")}
                </li>
              </ul>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent text-white border-warning">
                  {t("about.experience.exp3")} 
                </li>
                <li className="list-group-item bg-transparent text-white border-warning ">
                  {t("about.experience-description.exp3")}
                </li>
              </ul>
            </div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutMe;
