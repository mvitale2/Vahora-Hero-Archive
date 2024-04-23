// This is the datastructure that Card.js uses to generate the HTML necessary to display the data that's present here.
// In order to modify any data that's present on a hero card anywhere on the website, the data needs to be modified here.

import Mekial from "./assets/Mekial.JPG";
import Ron from "./assets/ron.png";
import Chard from "./assets/chardalyn.png";

const heroData = [
  {
    id: 1,
    name: "Mekial",
    archetype: "Sorcerer",
    party: "Planes",
    image: Mekial,
    description:
      "Mekial is an undead sorcerer who has gone utterly insane. He collects necklaces obsessively, and his wanton use of the Wand of Wonder reflects his scattered psyche. ",
  },
  {
    id: 2,
    name: "Ron'vaas'o",
    archetype: "Fighter",
    party: "Blood & Fire",
    image: Ron,
    description:
      "Ron'vaas'o was once enslaved by centaurs, but broke free by jointly starting a rebellion with his lover. He wields fearsome blood magic to bolster his swordfighting skills.",
  },
  {
    id: 3,
    name: "Chardalyn Argith",
    archetype: "Cleric",
    party: "Down Dead",
    image: Chard,
    description: "Chardalyn is a cleric of twilight who serves the goddess Dañacht. She willingly became a vampire when she fell in love with another vampire. "
  },
];

export default heroData;
