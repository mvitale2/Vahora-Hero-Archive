import React from "react";
// import { Link } from "react-router-dom";
import "./Gallery.css";
import Card from "../../components/Card/Card.js";
import heroData from "../../heroData.js";

function Gallery() {
  const gallery = heroData.map((hero) => {
    return (
      <Card
        key={hero.id}
        name={hero.name}
        archetype={hero.archetype}
        party={hero.party}
        description={hero.description}
        image={hero.image}
        artist={hero.artist}
      />
    );
  });
  return (
    <div className="gallery-wrapper">
      <section className="heroes">{gallery}</section>
    </div>
  );
}

export default Gallery;
