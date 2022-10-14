import React from 'react'
import Card from './card'
import image1 from "../../images/task-app-img.png"

let cards = [{
    id: 1,
    title: "Tasks project",
    description: "Description of the project",
    url: "#",
    image: image1
},
{
    id: 2,
    title: "My Portfolio",
    description: "Description of the project",
    url: "#",
    image: image1
},
{
    id: 3,
    title: "Algo",
    description: "Description of the project",
    url: "#",
    image: image1
}]

function Cards() {
  return (
    <div className="container row">
        {
            cards.map( (card) => (
                <div className="card col-4 bg-dark text-white m-2" key={card.id}>
                    <Card title={card.title} description={card.description} url={card.url} image={card.image}></Card>
                </div>
            ))
        }
    </div>
  )
}

export default Cards