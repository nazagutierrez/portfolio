import React from 'react'
import { useTranslation } from "react-i18next";

function Footer() {
  const [t] = useTranslation("global")
  const current = new Date()
  const date = `${current.getFullYear()}`

  return (
    <div className='container text-muted fw-semibold'>
        <div className='footer-top'>
            <h2 className='fs-4 fst-italic'>NAZARENO GUTIERREZ</h2>
            <p className='d-none d-sm-block'>{t("footer.description")}</p>
        </div>
        <div className='footer-bottom mt-4'>
            <span>© Copyright </span>
            <span>{date}.</span>
            <span>{t("footer.made")}<a href='https://www.linkedin.com/in/nazarenogutierrezoficial/' target='_blank' rel="noreferrer" className='link-warning opacity-50'>Nazareno Gutierrez</a></span>
        </div>
    </div>
  )
}

export default Footer