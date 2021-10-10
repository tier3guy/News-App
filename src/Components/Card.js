import React from 'react'

function Card(props){ 
  return (
    <div className = "card p-0 custom-grid-item">
      <img src={props.urlToImage} className="card-img-top" alt="Image Loading .."/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.title}</p>
        <button onClick = {props.func} className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Read More</button>
      </div>
    </div>
  )
}

export default Card
