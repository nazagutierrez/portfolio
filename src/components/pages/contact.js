import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const [t] = useTranslation("global")
  return (
    <div className="container">
      <form className="contact" action="https://formspree.io/f/xdojwpoa" method="POST">
        <div className="d-flex mb-5 mt-5 fs-2 justify-content-center text-white">
          {t("contact.title")}
        </div>
        <div className="form-floating mb-3 text-white">
          <input
            type="text"
            name="Name"
            className="form-control shadow-none text-white"
            id="floatingName"
            placeholder="Name"
            required
          />
          <label htmlFor="floatingName">{t("contact.name")}</label>
        </div>

        <div className="form-floating text-white">
          <input
            type="email"
            name="Email"
            className="form-control shadow-none text-white"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInput">{t("contact.email")}</label>
        </div>

        <div className="form-floating mt-3 text-white">
          <textarea
            className="form-control shadow-none text-white"
            name="Comment"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label htmlFor="floatingTextarea">{t("contact.comments")}</label>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="submit col-md-2 btn btn-primary mt-3">{t("contact.submit")}</button>
        </div>
      </form>
    </div>
  );
}

export function ReachMe() {
  return(
    <div className="email-number row mt-5 d-flex justify-content-center">
      <a className="social-icon btn btn-dark bi-envelope d-flex justify-content-center align-items-center rounded-circle" href="mailto:nazarenojunin@gmail.com"> </a>
      <a className="social-icon btn btn-dark bi-telephone d-flex justify-content-center align-items-center rounded-circle ms-2" href="ms-phone:2364329720"> </a> {/* tel:+54 2364329720 - PARA LLAMADA */}
    </div>
  )
}

export default Contact;
