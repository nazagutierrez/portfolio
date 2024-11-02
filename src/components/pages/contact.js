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
      className="btn-contact rounded-1 border-0 d-flex align-items-center justify-content-center gap-2"
      href={type === "send" ? `mailto:nazarenojunin@gmail.com` : type === "call" ? `tel:+542364329720` : null}
      target="_blank"
      rel="noreferrer"
      onClick={() => type === "copy" ? handleCopy(text) : null}
    >
      {type === "send" && svgRender("send")}
      {type === "call" && svgRender("call")}
      {type === "copy" && svgRender("copy")}
      {t(`contact.${type === "copy" ? copiedText === text ? "copied" : type : type}`)}
    </a>
  );

  return (
    <div className="position-relative container d-flex flex-column gap-1 align-items-start justify-content-start mb-5">
      <h2 className="mb-5 fs-2 underline-yellow text-white">
        {t("contact.title")}
      </h2>
      <div>
        <p className="contact-data-title mt-3">{t("contact.email-header")}</p>
        <div className="d-flex flex-column flex-sm-row justify-content-start align-items-start gap-3">
          <h1 className="contact-data align-self-start align-self-sm-center">nazarenojunin@gmail.com</h1>
          <div className="d-flex flex-sm-column gap-2 align-items-start justify-content-center">
          <ContactButton text="nazarenojunin@gmail.com" type="copy" />
          <ContactButton type="send" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="contact-data-title">{t("contact.call-header")}</p>
        <div className="d-flex flex-column flex-sm-row justify-content-start align-items-start gap-3">
          <h1 className="contact-data align-self-start align-self-sm-center">(+54) 236 432 9720</h1>
          <div className="d-flex flex-sm-column gap-2 align-items-center justify-content-center">
            <ContactButton text="+542364329720" type="copy" />
            <ContactButton type="call" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="contact-data-title">{t("contact.social-header")}</p>
        <div className="d-flex flex-column flex-sm-row justify-content-start align-items-start gap-3">
          <div className="cotact-social flex-wrap d-flex gap-2 text-black align-items-center justify-content-center">
            <a 
              className="btn-contact rounded-1 border-0 d-flex align-items-center justify-content-center gap-2"
              href="https://www.linkedin.com/in/nazarenogutierrez1"
              target="_blank"
              rel="noreferrer"
            >
              {svgRender("linkedin")}
              Linkedin
            </a>
            <a 
              className="btn-contact rounded-1 border-0 d-flex align-items-center justify-content-center gap-2"
              href="https://github.com/nazagutierrez"
              target="_blank"
              rel="noreferrer"
            >
              {svgRender("github")}
              Github
            </a>
            <a 
              className="btn-contact rounded-1 border-0 d-flex align-items-center justify-content-center gap-2"
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
      <a className="contact-home-btn btn btn-primary border-0 fs- text-black bi bi-arrow-up rounded-circle position-absolute" href="#Home"> </a> 
    </div>
  );
}

export default Contact;
