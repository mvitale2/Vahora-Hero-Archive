import React, { useState } from "react";
import Select from "react-select";
import "./Gallery.css";
import Card from "../../components/Card/Card.js";
import heroData from "../../heroData.js";

function Gallery() {
  // Dynamically generate options from the available parties
  let parties = new Set();
  parties.add("All");
  heroData.forEach((hero) => {
    if (hero.party !== "N/A") {
      parties.add(hero.party);
    }
  });
  parties = [...parties];
  // Sorts the options alphabetically
  parties.sort();
  const partyOptions = parties.map((party) => {
    return { value: party.toLowerCase(), label: party };
  });

  // Style the dropdown
  const partyStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "var(--btn-color-primary)",
      color: "var(--font-color-primary)",
      border: "none",
      cursor: "pointer",
      width: "270px",
      textAlign: "center",
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "var(--btn-color-primary)",
        cursor: "pointer",
        ":hover": { backgroundColor: "var(--btn-color-hover)" },
      };
    },
    // label: (styles) => {
    //   return { ...styles, color: "var(--font-color-primary)" };
    // },
  };

  // Declare states
  // Party state is used to determine which description to display
  const [selectedParty, setParty] = useState(null);
  // Gallery state is used to determine which heroes to display, defaults to displaying all of them
  const [gallery, setGallery] = useState(
    heroData.map((hero) => {
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
    })
  );

  // Tell React when a new option is selected. Updates both states.
  const handleChange = (selectedOption) => {
    const party = selectedOption.label;
    setParty(party);
    setGallery(
      heroData.map((hero) => {
        if (hero.party === party) {
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
        } else if (party === "All") {
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
        } else return null;
      })
    );
  };

  // Page structure
  return (
    <div className="gallery-wrapper">
      <section className="filters">
        <div className="top">
          <span>Select a party to learn more about each hero.</span>
        </div>
        <div className="bottom">
          <Select
            options={partyOptions}
            onChange={handleChange}
            styles={partyStyles}
          />
        </div>
      </section>
      <section className="heroes">{gallery}</section>
      <section className="party-desc">
        {/* Create a separate file/component for each description in order to properly contain the large amount of text */}
        {selectedParty === "Down Dead" ? <p>bumbo</p> : null}
        {selectedParty === "Blood & Fire" ? <p>rumblecups</p> : null}
        {selectedParty === "Hell's Horizon"
          ? <p>This campaign takes place on the continent of Afastera.</p>
          : null}
        {selectedParty === "Spice Girls" ? <p>anchor haha</p> : null}
        {selectedParty === "Derelict" ? <p>Where's Onfi?</p> : null}
        {selectedParty === "String the Quarry" ? (
          <p>Something about a ring idk</p>
        ) : null}
        {selectedParty === "Strange Tidings" ? (
          <p>I didn't play in this campaign lol</p>
        ) : null}
        {selectedParty === "All-Adventure" ? <p>metal_rod.mp3</p> : null}
        {selectedParty === "Dust Bandits" ? (
          <p>These guys are rather dusty...</p>
        ) : null}
        {selectedParty === "Secrets of the Wellspring" ? (
          <p>Something about a mountain exploding idk</p>
        ) : null}
      </section>
    </div>
  );
}

export default Gallery;
