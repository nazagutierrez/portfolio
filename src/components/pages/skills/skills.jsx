import React from "react";
import { useTranslation } from "react-i18next";

import Skill from "./skill";
import images from "../../../images/imgExports";

let skills = [
  {
    id: crypto.randomUUID(),
    image: images.reactImg,
    title: "ReactJS"
  },
  {
    id: crypto.randomUUID(),
    image: images.nextjs,
    title: "Nextjs"    
  },
  {
    id: crypto.randomUUID(),
    image: images.jsImg,
    title: "Javascript"
  },
  {
    id: crypto.randomUUID(),
    image: images.typescript,
    title: "Typescript"    
  },
  {
    id: crypto.randomUUID(),
    image: images.tailwindcss,
    title: "TailwindCSS"    
  },
  {
    id: crypto.randomUUID(),
    image: images.cssImg,
    title: "CSS"
  },
  {
    id: crypto.randomUUID(),
    image: images.htmlImg,
    title: "HTML"
  },
  {
    id: crypto.randomUUID(),
    image: images.bootstrapImg,
    title: "Bootstrap"
  },
  {
    id: crypto.randomUUID(),
    image: images.sassImg,
    title: "Sass"
  },
  {
    id: crypto.randomUUID(),
    image: images.gitImg,
    title: "Git"
  },
  {
    id: crypto.randomUUID(),
    image: images.firebase,
    title: "Firebase"    
  },
  {
    id: crypto.randomUUID(),
    image: images.apiImg,
    title: "Api consume"
  },
  {
    id: crypto.randomUUID(),
    image: images.responsiveDesign,
    title: "Responsive design"    
  }
];

function Skills() {
  return (
    <div className="flex justify-center skills-container">
      <div className="flex mt-3 flex-wrap gap-2 justify-center md:w-8/12">
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
    <div className="mt-5 lg:mt-0">
      <h1 className="text-center text-title container mb-4 sm:mt-0 mt-5 underline-black">
        {t("skills.title")}
      </h1>
    </div>

  );
}

export default Skills;
