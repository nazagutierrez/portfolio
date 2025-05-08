import React from "react";
import { useTranslation } from "react-i18next";
import images from "../../images/imgExports";

function AboutMe() {
  const [t] = useTranslation("global");
  return (
    <div className="max-w-[1400px] lg:flex text-center mt-lg-0 my-5">
      <img
        src={images.noBgProfile}
        alt="profile"
        className="rounded-full w-3/4 lg:mr-5 object-cover"
      />
      <div className="flex justify-center flex-col mt-5">
        <div className="aboutme">
          <h3 className="text-title text-center text-white-main underline-yellow"> 
            {t("about.title")}
          </h3>
          <p className="text-white-main mt-3 text-center">
            {t("about.description-a")}
            <span className="text-yellow-main brightness-110">{" "}{t("about.description-b")}{" "}</span>
            {t("about.description-c")}
          </p>
          <p className="text-white-main mt-4 text-center">
            {t("about.description2-a")}
            <span className="text-yellow-main brightness-110">{" "}{t("about.description2-b")}{" "}</span>
            {t("about.description2-c")}
          </p>
          <p className="text-white-main mt-2 text-center">
            {t("about.description3")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
