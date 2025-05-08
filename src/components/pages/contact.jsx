import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { svgRender } from "../utils/svgRender";

function Contact() {
  const [t] = useTranslation("global")
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => setCopiedText(textToCopy))
      .catch((error) => console.error("Error al copiar el texto:", error));
  };

  const ContactButton = ({ text = "", type }) => (
    <a
      className="bg-yellow-main cursor-pointer rounded-sm border-0 w-24 flex items-center justify-center gap-2"
      href={type === "send" ? `mailto:nazarenojunin@gmail.com` : type === "chat" && `https://wa.me/5492364329720?text=Hola!`}
      target="_blank"
      rel="noreferrer"
      onClick={() => type === "copy" ? handleCopy(text) : null}
    >
      {type === "send" && svgRender("send")}
      {type === "chat" && svgRender("chat")}
      {type === "copy" && svgRender("copy")}
      {t(`contact.${type === "copy" ? copiedText === text ? "copied" : type : type}`)}
    </a>
  );

  return (
    <div className="relative h-full w-full flex flex-col gap-1 items-start justify-start ms-0 mb-5 space-y-4">
      <h2 className="mb-5 text-title text-white-main underline-yellow">
        {t("contact.title")}
      </h2>
      <div>
        <p className="text-gray-main/80 text-sm mt-3">{t("contact.email-header")}</p>
        <div className="flex flex-col sm:flex-row justify-start items-start gap-3">
          <h1 className="self-start sm:self-center text-white-main text-3xl font-mono">nazarenojunin@gmail.com</h1>
          <div className="flex sm:flex-col gap-2 items-start justify-center">
            <ContactButton text="nazarenojunin@gmail.com" type="copy" />
            <ContactButton type="send" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-gray-main/80 text-sm">{t("contact.call-header")}</p>
        <div className="flex flex-col sm:flex-row justify-start items-start gap-3">
          <h1 className="self-start sm:self-center text-white-main text-3xl font-mono">(+54) 236 432 9720</h1>
          <div className="flex sm:flex-col gap-2 items-center justify-center">
            <ContactButton text="+542364329720" type="copy" />
            <ContactButton type="chat" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-gray-main/80 mb-2 text-sm">{t("contact.social-header")}</p>
        <div className="flex flex-col sm:flex-row justify-start items-start gap-3">
          <div className="contact-social flex-wrap flex gap-2 text-black items-center justify-center">
            <a
              className="w-24 bg-yellow-main rounded-sm border-0 flex items-center justify-center gap-2"
              href="https://www.linkedin.com/in/nazarenogutierrez1"
              target="_blank"
              rel="noreferrer"
            >
              {svgRender("linkedin")}
              Linkedin
            </a>
            <a
              className="w-24 bg-yellow-main rounded-sm border-0 flex items-center justify-center gap-2"
              href="https://github.com/nazagutierrez"
              target="_blank"
              rel="noreferrer"
            >
              {svgRender("github")}
              Github
            </a>
            <a
              className="w-24 bg-yellow-main rounded-sm border-0 flex items-center justify-center gap-2"
              href="https://x.com/nazadevv"
              target="_blank"
              rel="noreferrer"
            >
              {svgRender("twitter")}
              Twitter
            </a>
          </div>
        </div>
      </div>
      <a className="absolute text-xs flex items-center justify-center bg-yellow-main border-0 text-black-main rounded-full bottom-6 right-6 w-10 h-10" href="#Home">
        {svgRender("doubleArrowUp")}
      </a>
    </div>
  );
}

export default Contact;
