import React from "react";
import { useTranslation } from "react-i18next";
import { svgRender } from "../utils/svgRender";

function Contact() {
  const [t] = useTranslation("global")

  return (
    <div className="position-relative container d-flex flex-column gap-1 align-items-start justify-content-start mb-5">
      <h2 className="mb-5 fs-2 underline-yellow text-white">
        {t("contact.title")}
      </h2>
      <div>
        <p className="contact-data-title mt-3">Say hi or talk future projects</p>
        <div className="d-flex flex-column flex-sm-row justify-content-start align-items-start gap-3">
          <h1 className="contact-data align-self-start align-self-sm-center">nazarenojunin@gmail.com</h1>
          <div className="d-flex flex-sm-column gap-2 align-items-start justify-content-center">
            <button className="btn-contact rounded-1 border-0 d-flex align-items-center justify-content-center gap-2">
              {svgRender("copy")}
              Copiar
            </button>
            <button className="btn-contact rounded-1 border-0 d-flex align-items-center justify-content-center gap-2">
              {svgRender("send")}
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="contact-data-title">Call me or send me a message</p>
        <div className="d-flex flex-column flex-sm-row justify-content-start align-items-start gap-3">
          <h1 className="contact-data align-self-start align-self-sm-center">(+54) 236 432 9720</h1>
          <div className="d-flex flex-sm-column gap-2 align-items-center justify-content-center">
            <button className="btn-contact rounded-1 border-0 d-flex align-items-center justify-content-center gap-2">
              {svgRender("copy")}
              Copiar
            </button>
            <button className="btn-contact rounded-1 border-0 d-flex align-items-center justify-content-center gap-2">
              {svgRender("call")}
              Llamar
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="contact-data-title">My socials</p>
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
