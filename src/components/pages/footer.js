import React from 'react'
import { useTranslation } from "react-i18next";

function Footer() {
  const [t] = useTranslation("global")
  const current = new Date()
  const date = `${current.getFullYear()}`

  return (
    <>
      <div className='container'>
          <div className='footer-top'>
              <h2 className='fs-6 fst-italic'>NAZARENO GUTIERREZ</h2>
              <p className='d-none d-sm-block'>{t("footer.description")}</p>
          </div>
          <div className='footer-bottom'>
              <span>© Copyright </span>
              <span>{date}.</span>
              <span>{t("footer.made")}<a href='https://www.linkedin.com/in/nazarenogutierrezoficial/' target='_blank' rel="noreferrer" className='link-warning opacity-50'>Nazareno Gutierrez</a></span>
          </div>
      </div>
      <a className="arrow-to-home btn btn-primary border-0 fs-6 align-self-baseline me-2 mt-2 text-black bi bi-arrow-up d-flex justify-content-center align-items-center rounded-circle d-sm-none" href="#Home"> </a>
    </>

  )
}

export default Footer