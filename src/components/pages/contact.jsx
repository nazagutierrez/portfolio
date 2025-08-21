import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { svgRender } from "../utils/svgRender";
import Footer from "./footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollLink from "../utils/ScrollLink";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { name: "Linkedin", icon: "linkedin", url: "https://www.linkedin.com/in/nazarenogutierrez1" },
  { name: "Github", icon: "github", url: "https://github.com/nazagutierrez" },
  { name: "Twitter", icon: "twitter", url: "https://x.com/nazadevv" },
];

const ContactButton = ({ text = "", type, copiedText, handleCopy, t }) => {
  const icons = { send: "send", chat: "chat", copy: "copy" };
  const href = { send: "mailto:nazarenojunin@gmail.com", chat: "https://wa.me/5492364329720?text=Hola!" }[type];
  const label = type === "copy" && copiedText === text ? t("contact.copied") : t(`contact.${type}`);

  return (
    <a
      className="styled-button rounded-sm w-20 px-1 py-px gap-1" 
      href={href || "#"}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => {
        if (type === "copy") {
          e.preventDefault();
          handleCopy(text);
        }
      }}
    
    >
      {svgRender(icons[type])}
      {label}
    </a>
  );
};

function Contact() {
  const [t] = useTranslation("global");
  const [copiedText, setCopiedText] = useState(null);
  const contactRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);


  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopiedText(text))
      .catch(console.error);
  };

  const infoSections = [
    {
      label: t("contact.email-header"),
      value: "nazarenojunin@gmail.com",
      buttons: ["copy", "send"],
    },
    {
      label: t("contact.call-header"),
      value: "(+54) 236 432 9720",
      buttons: ["copy", "chat"],
      copyText: "+542364329720",
    },
  ];

  return (
    <section id="Contact" ref={contactRef} className="relative pt-20 pb-32 mx-1 sm:mx-10 lg:mx-44 selectable-yellow flex flex-col gap-6 px-2">
      <h2 className="text-title text-white-main underline-yellow mb-4">{t("contact.title")}</h2>

      {infoSections.map(({ label, value, buttons, copyText }, i) => (
        <div key={i}>
          <p className="text-gray-main/80 text-sm">{label}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <h1 className="text-white-main content-center sm:text-xl md:text-3xl font-mono wrap-break-word">{value}</h1>
            <div className="flex sm:flex-col gap-2 items-start">
              {buttons.map((type) => (
                <ContactButton
                  key={type}
                  type={type}
                  text={copyText || value}
                  copiedText={copiedText}
                  handleCopy={handleCopy}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <div>
        <p className="text-gray-main/80 text-sm mb-1">{t("contact.social-header")}</p>
        <div className="flex flex-wrap gap-2">
          {socials.map(({ name, icon, url }) => (
            <a
              key={name}
              className="w-20 px-px styled-button rounded-sm py-px gap-2"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {svgRender(icon)}
              {name}
            </a>
          ))}
        </div>
      </div>

      <ScrollLink
        className="absolute bottom-14 xs:bottom-10 md:bottom-6 right-6 w-10 h-10 styled-button text-xs rounded-full z-10"
        to="#Home"
      >
        {svgRender("doubleArrowUp")}
      </ScrollLink>

      <Footer />
    </section>
  );
}

export default Contact;
