import React from "react";
import descriptions from "./descriptions.js";
import "./About.css";
import Afastera from "../../assets/Afastera.jpg";
import Korinsted from "../../assets/Luren.png";
import Polvi from "../../assets/polvi.png"

function Continent({ name, description, image }) {
  return (
    <div className="continent">
      <div className="left">
        <img src={image} alt={name} />
      </div>
      <div className="right">
        <h2>{name}</h2>
        <hr />
        <p>{description}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-wrapper">
      <section className="world-desc">
        <p>{descriptions[0]}</p>
        <p>
          Vahora is made up of 10 continents, each of which are described
          further below:
        </p>
        <ul>
          <li>Afastera</li>
          <li>Awlerpar</li>
          <li>Campooros</li>
          <li>Creas'ol</li>
          <li>Charkañas</li>
          <li>Corinstead</li>
          <li>Doblear</li>
          <li>Korinsted</li>
          <li>Polvinagas</li>
          <li>The Southern Mass</li>
        </ul>
      </section>
      <section className="continents-wrapper">
        <h1>Browse Vahora's Continents</h1>
        <Continent
          name="Afastera"
          image={Afastera}
          description={descriptions[1]}
        />
        <Continent
          name="Korinsted"
          image={Korinsted}
          description={descriptions[2]}
        />
        <Continent
          name="Polvinagas"
          image={Polvi}
          description={descriptions[3]}
        />
      </section>
    </div>
  );
}

export default About;
