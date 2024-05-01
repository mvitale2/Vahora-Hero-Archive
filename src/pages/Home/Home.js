import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card.js";
import "./Home.css";
import heroData from "../../heroData.js";
import VahoraMap from "../../assets/VahoraBig.jpg";

function Home() {
  // randomly determines hero preview
  // the last hero in the list will never be displayed here
  // this is due to the requirement that it must be contained
  const randomInt = () => {
    return Math.floor(Math.random() * (heroData.length - 3));
  }
  const startIndex = randomInt();
  const endIndex = startIndex + 2;
  const selectedHeroes = heroData.slice(startIndex, endIndex + 1);

  // map the newly created array of heroes from above to html that can be displayed
  const heroes = selectedHeroes.map((hero) => {
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
    <div className="home-wrapper">
      <section className="banner">
        <img src={VahoraMap} className="banner-img" alt="Map of Vahora" />
        <span className="cta">
          Discover the heroes that have traversed this ancient realm...
        </span>
        <Link to="/gallery">
          <button className="cta-btn">Visit the Hero Gallery</button>
        </Link>
      </section>
      <section className="intro">
        <div className="top">
          <span className="intro-text">
            Vahora is a fantasy setting created for D&D 5e. This website is
            devoted to all of the various adventuring groups that have traversed
            the world and contributed to its vast history. Peruse the archive at
            your leisure &mdash; there is much to explore!
          </span>
          <h2>Welcome to the Archive!</h2>
        </div>
        <div className="bottom">
          <Link to="/about">
            <button className="learn-btn">Learn more about Vahora</button>
          </Link>
        </div>
      </section>
      <section className="hero-preview">
        <h2>Preview some of the heroes!</h2>
        <div className="heroes-wrapper">{heroes}</div>
      </section>
      <section className="story">
        <h2>A Years-Long Project</h2>
        <span>
          Vahora is primarily the work of one person: wd_1142645; however, many
          of the chracters depicted here are the work of others who have played
          in wd_1142645's setting. Over the 6 years since its first iteration in
          2018, Vahora has become not only rich with history, but also with
          lasting memories of the people who have contributed to that history.
        </span>
      </section>
    </div>
  );
}

export default Home;
