import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card.js";
import "./Home.css";
import heroData from "../../heroData.js";
import VahoraMap from "../../assets/VahoraBig.jpg";

function Home() {
  //the .map() function creates a new array from an already existing array
  const heroes = heroData.map((hero) => {
    //change '< 4' to be a range of random numbers, still maintaing that only 3 cards are shown
    if (hero.id < 4) {
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
    } else {
      return null;
    }
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
            sapien non sagittis mollis. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Mauris posuere
            tincidunt hendrerit. Pellentesque in hendrerit augue, quis efficitur
            ante. Duis porta suscipit interdum. Suspendisse viverra finibus
            faucibus. Nunc eget elementum neque. Donec lacinia sodales ornare.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
          sapien non sagittis mollis. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Mauris posuere
          tincidunt hendrerit. Pellentesque in hendrerit augue, quis efficitur
          ante. Duis porta suscipit interdum. Suspendisse viverra finibus
          faucibus. Nunc eget elementum neque. Donec lacinia sodales ornare.
        </span>
      </section>
    </div>
  );
}

export default Home;
