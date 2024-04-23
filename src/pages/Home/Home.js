import React from "react";
import Card from "../../components/Card/Card.js";
import "./Home.css";
import heroData from "../../heroData.js";

function Home() {
  //the .map() function creates a new array from an already existing array
  const heroes = heroData.map((hero) => {
    if (hero.id < 4) {
      return (
        <Card
          key={hero.id}
          name={hero.name}
          archetype={hero.archetype}
          party={hero.party}
          description={hero.description}
          image={hero.image}
        />
      );
    } else {
      return null;
    }
  });
  return (
    <div className="home-wrapper">
      <div className="hero-preview">
        <h2>Preview some of the heroes!</h2>
        <div className="heroes-wrapper">{heroes}</div>
      </div>
    </div>
  );
}

export default Home;
