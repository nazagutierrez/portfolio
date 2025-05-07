import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const FixedButtons = () => {
  const [,i18n] = useTranslation("global")
  return (
    <motion.div
      className="m-2 fixed-bottom d-flex flex-column"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}>

      <div className="btn-group-vertical btn-group-sm lng-btns" role="group" aria-label="lng toggle">
          <input type="radio" className="btn-check" name="vbtn-radio" id="btn-en" autoComplete="off" defaultChecked/>
          <label className="social-icon btn btn-dark d-flex justify-content-center align-items-center rounded-circle mb-1" htmlFor="btn-en" onClick={() => i18n.changeLanguage("en")}>EN</label>
          <input type="radio" className="btn-check" name="vbtn-radio" id="btn-es" autoComplete="off"/>
          <label className="social-icon btn btn-dark d-flex justify-content-center align-items-center rounded-circle mb-0 mb-sm-1" htmlFor="btn-es" onClick={() => i18n.changeLanguage("es")}>ES</label>
      </div>

      <div className="d-none d-sm-block">
        <a
          className="social-icon btn btn-dark bi-linkedin d-flex justify-content-center align-items-center rounded-circle mb-1"
          href="https://www.linkedin.com/in/nazarenogutierrez1/"
          target="_blank"
          rel="noreferrer"> </a>

        <a
          className="social-icon btn btn-dark bi-github d-flex justify-content-center align-items-center rounded-circle"
          href="https://github.com/nazagutierrez"
          target="_blank"
          rel="noreferrer"> </a>
      </div>
    </motion.div>
  );
};

export default FixedButtons;
