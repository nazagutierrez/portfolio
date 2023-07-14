import React from 'react'
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'

function Card({image, title, description, url, url2}) {
  const [t] = useTranslation("global")
  return (
    <div>
        <div>
          <motion.img whileHover={{opacity: 0.4}}  src={image} className="card-img-top" alt="page-img"></motion.img>
        </div>
        <div className="card-body text-center d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-center">
              <a href={url2} className="btn btn-primary border-0 col-7 me-2" target="_blank" rel="noreferrer">{t("projects.demo")}</a>
              <a href={url} className="btn btn-primary btn-sm border-0 col-3 fs-5" target="_blank" rel="noreferrer"><i class="bi bi-github"/></a>
            </div>
        </div>
    </div>
  )
}

export default Card