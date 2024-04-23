import React from "react";
import "./Card.css";

// This is the 'skeleton' of the HTML that will be used to generate hero cards.
// This function can be called as a tag, then we can pass the hero data into the tag in order to generate the specified hero.
function Card(props) {
  return (
    <div className="hero-card">
      <div className="card-title">
        <h3>{props.name}</h3>
        <i>{props.archetype} of {props.party}</i>
      </div>
      <div className="hero-img">
        <img src={props.image} alt={props.name}/>
      </div>
      <div className="hero-desc">
        {props.description}
      </div>
    </div>
  );
}

export default Card;
