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
      </div>
    </div>
  );
}

export default AboutMe;
