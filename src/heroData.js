// This is the data structure that Card.js uses to generate the HTML necessary to display the data that's present here.
// In order to modify any data that's present on a hero card anywhere on the website, the data needs to be modified here.

import Mekial from "./assets/heroes/Mekial.JPG";
import Ron from "./assets/heroes/ron.png";
import Chard from "./assets/heroes/chardalyn.png";
import Rath from "./assets/heroes/rath.png";
import Nalu from "./assets/heroes/nalu.png";
import Rolio from "./assets/heroes/Rolio.png";

/*

image import template:
import [name] from "./assets/heroes/[image]"

new hero template:
{
  id: n+1 (where n is the previous id #),
  name: "",
  archetype: "",
  party: "",
  image: [img import],
  description: "",
  artist: "",
},

*/

const heroData = [
  {
    id: 1,
    name: "Mekial",
    archetype: "Sorcerer",
    party: "Planes",
    image: Mekial,
    description:
      "Mekial is an undead sorcerer who has gone utterly insane. He collects necklaces obsessively, and his wanton use of the Wand of Wonder reflects his scattered psyche. ",
    artist: "skel101",
  },
  {
    id: 2,
    name: "Ron'vaas'o",
    archetype: "Fighter",
    party: "Blood & Fire",
    image: Ron,
    description:
      "Ron'vaas'o was once enslaved by centaurs, but broke free by jointly starting a rebellion with his lover. He wields fearsome blood magic to bolster his swordfighting skills.",
    artist: "Vittoria Pompolani",
  },
  {
    id: 3,
    name: "Chardalyn Argith",
    archetype: "Cleric",
    party: "Down Dead",
    image: Chard,
    description:
      "Chardalyn is a cleric of twilight who serves the goddess Dañacht. She willingly became a vampire when she fell in love with Roz Do'sek.",
    artist: "wd_1142645",
  },
  {
    id: 4,
    name: "Rath",
    archetype: "Monk",
    party: "Hell's Horizon",
    image: Rath,
    description:
      "Rath is a brutal dragonborn whose scales are made of steel. He practices the unique monastic tradition known as the Steel Vengeance.",
    artist: "itsconnell",
  },
  {
    id: 5,
    name: "Nalu Krest",
    archetype: "Druid",
    party: "Spice Girls",
    image: Nalu,
    description:
      "Nalu is a water elemental who assumes the form of a humanoid girl. She used to be a human, but was turned into an elemental when her home island was consumed in a tsunami.",
    artist: "itsconnell",
  },
  {
  id: 6,
  name: "Rolio",
  archetype: "Bard",
  party: "Derelict",
  image: Rolio,
  description: "epic robot bard",
  artist: "skel101",
},
];

export default heroData;
