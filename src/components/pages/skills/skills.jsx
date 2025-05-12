import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import Skill from "./skill";
import images from "../../../images/imgExports";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    image: images.gsap,
    title: "GSAP"    
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

export function Skills() {
  const skillsRef = useRef();
  const skillsTitleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      skillsTitleRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: skillsTitleRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);
  
  const [t] = useTranslation("global");

  return (
    <section className="flex flex-col justify-center selectable-black items-center bg-bg-yellow pb-10 sm:pb-12 sm:py-12" id="Skills">
      <div className="mt-5 lg:mt-0">
        <h1 className="text-center text-title mb-4 sm:mt-0 mt-5 underline-black" ref={skillsTitleRef}>
          {t("skills.title")}
        </h1>
      </div>
      <div className="flex mt-3 flex-wrap gap-2 justify-center mx-2 sm:mx-10 xl:mx-40" ref={skillsRef}>
        {skills.map((skill) => (
          <div key={skill.id}>
            <Skill image={skill.image} title={skill.title} />
          </div>
        ))}
      </div>
    </section>

  );
}
