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
              <h2 className='fs-6 fst-italic mt-2 mt-lg-0'>NAZARENO GUTIERREZ</h2>
              <p className='d-none d-sm-block'>{t("footer.description")}</p>
          </div>
          <div className='footer-bottom'>
              <span>© Copyright </span>
              <span>{date}.</span>
              <span>{t("footer.made")}<a href='https://www.linkedin.com/in/nazarenogutierrez1/' target='_blank' rel="noreferrer" className='link-warning opacity-50'>Nazareno Gutierrez</a></span>
          </div>
      </div>
    </>

  )
}

export default Footer