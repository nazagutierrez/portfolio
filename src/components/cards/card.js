import React from 'react'


function Card({image, title, description, url}) {
  return (
    <div>
        <img src={image} className="card-img-top p-2" alt="page-img"></img>
        <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary btn-sm border-0"> Go to this website </a>
        </div>
    </div>
  )
}

export default Card