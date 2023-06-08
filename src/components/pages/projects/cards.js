import React from 'react'
import { useTranslation } from "react-i18next";

import Card from './card'
import image from "../../../images/imgExports";

let cards = [{
    id: 1,
    title: "Freelance work",
    description: "App for a bakery business, maded from 0 in 2 weeks",
    url2: "https://cooktacookies.web.app/",
    url: "https://github.com/nazagutierrez/",
    image: image.cookta
},
{
    id: 3,
    title: "Coinbase's clon",
    description: "Static HTML styled by Sass",
    url2: "https://nazagutierrez.github.io/coinbase-clone/",
    url: "https://github.com/nazagutierrez/coinbase-clone",
    image: image.coinbase
},
{
    id: 2,
    title: "My Portfolio",
    description: "Maded with ReactJS and styled by Sass and Bootstrap",
    url2: "#Home",
    url: "https://github.com/nazagutierrez/portfolio",
    image: image.portfolio
}]

function Cards() {
  return (
    <div className="d-flex flex-column flex-xl-row justify-content-center">
        {
            cards.map( (card) => (
                <div className="card col-4 bg-dark text-white m-2 mt-4 p-0" key={card.id}>
                    <Card title={card.title} description={card.description} url={card.url} url2={card.url2} image={card.image} />
                </div>
            ))
        }
    </div>
  )
}

export function Title() {
    const [t] = useTranslation("global")
    return(
        <div>
            <h1 className="d-flex fs-2 mt-4 mt-0-md justify-content-center text-center text-white">{t("projects.my-projects")}</h1>
        </div>
    )
}

export default Cards