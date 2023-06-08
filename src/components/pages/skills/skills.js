import React from "react";
import { useTranslation } from "react-i18next";

import Skill from "./skill";
import images from "../../../images/imgExports";

let skills = [
  {
    id: "1",
    image: images.reactImg,
    title: "ReactJS"
  },
  {
    id: "2",
    image: images.language,
    title: "Intermediate English"
  },
  {
    id: "3",
    image: images.jsImg,
    title: "Javascript"
  },
  {
    id: "4",
    image: images.cssImg,
    title: "CSS"
  },
  {
    id: "5",
    image: images.htmlImg,
    title: "HTML"
  },
  {
    id: "6",
    image: images.bootstrapImg,
    title: "Bootstrap"
  },
  {
    id: "7",
    image: images.sassImg,
    title: "Sass"
  },
  {
    id: "8",
    image: images.gitImg,
    title: "Git"
  },
  {
    id: "9",
    image: images.npmImg,
    title: "npm"
  },
  {
    id: "10",
    image: images.reduxImg,
    title: "Redux"
  },
  {
    id: "11",
    image: images.apiImg,
    title: "Api consume"
  },
  {
    id: "12",
    image: images.framerMotion,
    title: "Framer motion"
  },
  {
    id: "13",
    image: images.responsiveDesign,
    title: "Responsive design"    
  },
  {
    id: "14",
    image: images.firebase,
    title: "Firebase"    
  },
  {
    id: "15",
    image: images.nextjs,
    title: "Nextjs"    
  },
  {
    id: "16",
    image: images.tailwindcss,
    title: "TailwindCSS"    
  }
];

function Skills() {
  return (
    <div className="d-flex justify-content-center">
      <div className="skill-cards d-flex mt-sm-3 flex-wrap justify-content-center col-6 col-md-8">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <Skill image={skill.image} title={skill.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsTitle() {
    const [t] = useTranslation("global");
  return (
    <div>
      <h1 className="justify-content-center text-center text-white fs-2 container mb-4 mt-sm-0 mt-5">
        {t("skills.title")}
      </h1>
    </div>
  );
}

export default Skills;
