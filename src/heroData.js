// This is the data structure that Card.js uses to generate the HTML necessary to display the data that's present here.
// In order to modify any data that's present on a hero card anywhere on the website, the data needs to be modified here.

import Mekial from "./assets/heroes/Mekial.JPG";
import Ron from "./assets/heroes/ron.png";
import Chard from "./assets/heroes/chardalyn.png";
import Rath from "./assets/heroes/rath.png";
import Nalu from "./assets/heroes/nalu.png";
import Rolio from "./assets/heroes/Rolio.png";
import Mallory from "./assets/heroes/mallory.png";
import Edward from "./assets/heroes/edward.png";
import Fella from "./assets/heroes/fella.PNG";
import Khitz from "./assets/heroes/khitz.png";
import Mordenhau from "./assets/heroes/mordenhau.png";
import Rexabour from "./assets/heroes/rexabour.png";
import Toan from "./assets/heroes/toan.png";
import Vin from "./assets/heroes/vin.png";
import Arbre from "./assets/heroes/arbre.jpg";
import Steel from "./assets/heroes/steel_dart.png";
import Hazel from "./assets/heroes/hazel.png";
import Rook from "./assets/heroes/rook.png";
import Crimbsy from "./assets/heroes/crimbsy.png";
import Kellen from "./assets/heroes/kellen.png";
import Murmur from "./assets/heroes/murmur.png";
import Papil from "./assets/heroes/papil.png";
import Qorvo from "./assets/heroes/qorvo.png";
import Dune from "./assets/heroes/dune.png";
import Fennell from "./assets/heroes/fennell_capture.PNG";
import Reed from "./assets/heroes/reed_capture.PNG";
import Vaalamora from "./assets/heroes/vaalamora_capture.PNG";
import Ferrum from "./assets/heroes/ferrum.png";

/*

image import template:
import [name] from "./assets/heroes/[image]"

DO NOT MAKE YOUR HERO THE LAST HERO IN THE LIST
UPDATE THE LAST ID NUMBER
WE MUST KEEP IT CONTAINED
WE MUST KEEP IT CONTAINED
WE MUST KEEP IT CONTAINED
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
WE MUST KEEP IT CONTAINED
WE MUST KEEP IT CONTAINED
WE MUST KEEP IT CONTAINED
UPDATE THE LAST ID NUMBER
DO NOT MAKE YOUR HERO THE LAST HERO IN THE LIST

*/

const heroData = [
  {
    id: 1,
    name: "Mekial",
    archetype: "Sorcerer",
    party: "N/A",
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
  {
    id: 7,
    name: "Arbre",
    archetype: "Druid",
    party: "N/A",
    image: Arbre,
    description:
      "An undead druid who wields a shotgun and almost never wildshapes. It may also be referred to as Kingslayer High Emperor Arbre, Pseudo-Lich King-God of all Ratkind, Xanathar's End, Tarrasque Terror, The Deathless's Deathbringer, Mountebank Murderer, and Lord of Domain Yii-Star, Cruelty.",
    artist: "itsconnell",
  },
  {
    id: 8,
    name: "Mordenhau",
    archetype: "Fighter/Cleric",
    party: "Hell's Horizon",
    image: Mordenhau,
    description: "bird with big big arrow hehe",
    artist: "itsconnell",
  },
  {
    id: 9,
    name: "Toan Hangcloak",
    archetype: "Wizard",
    party: "Spice Girls",
    image: Toan,
    description: "A wizardly drow",
    artist: "itsconnell",
  },
  {
    id: 10,
    name: "Mallory Merino",
    archetype: "Rogue",
    party: "String the Quarry",
    image: Mallory,
    description:
      "She was once a soldier in an army of rogues in the floating city of Vallenis, but she overthrew the tyrannical leader and founded the Academy of All Adventure.",
    artist: "itsconnell",
  },
  {
    id: 11,
    name: "Vin Hidala",
    archetype: "Paladin",
    party: "Strange Tidings",
    image: Vin,
    description: "elephant boy",
    artist: "itsconnell",
  },
  {
    id: 12,
    name: "Steel Drop",
    archetype: "Artificer",
    party: "All-Adventure",
    image: Steel,
    description: "steel drop",
    artist: "itsconnell",
  },
  {
    id: 13,
    name: "Khitz",
    archetype: "Artificer",
    party: "Dust Bandits",
    image: Khitz,
    description:
      "A murderous kobold with an affinity for creating devices of mass destruction.",
    artist: "itsconnell",
  },
  {
    id: 14,
    name: "Edward Turnsburrow",
    archetype: "Evolutionist",
    party: "Secrets of the Wellspring",
    image: Edward,
    description: "A doctor who often defied the rule of 'do no harm.'",
    artist: "itsconnell",
  },
  {
    id: 15,
    name: "Rexabour",
    archetype: "Fighter",
    party: "Down Dead",
    image: Rexabour,
    description: "An undead soldier who was once a sentient sword. ",
    artist: "itsconnell",
  },
  {
    id: 16,
    name: "Rook",
    archetype: "Monk",
    party: "Dust Bandits",
    image: Rook,
    description:
      "Not much is known about this one, but Khitz has named him as a 'good hunting partner.'",
    artist: "wd_1142645",
  },
  {
    id: 17,
    name: "Hazel Townsend",
    archetype: "Cleric",
    party: "Blood & Fire",
    image: Hazel,
    description: "bat man",
    artist: "itsconnell",
  },
  {
    id: 18,
    name: "Crimbsy Crinkledink",
    archetype: "Paladin",
    party: "Dust Bandits",
    image: Crimbsy,
    description:
      "A silly Paladin who has forsaken Caldustitia and pines after Fustair's father.",
    artist: "Rat Hag",
  },
  {
    id: 19,
    name: "Kellen Van'der'meer",
    archetype: "Sorcerer",
    party: "Blood & Fire",
    image: Kellen,
    description: "A vampire that cracked open a sphere filled with dead gods.",
    artist: "April Prime",
  },
  {
    id: 20,
    name: "Murmur",
    archetype: "Ranger",
    party: "String the Quarry",
    image: Murmur,
    description:
      "A soulsewn tabaxi who has the mind of a child. At the end of String the Quarry, a mythal was embedded into him. ",
    artist: "itsconnel",
  },
  {
    id: 21,
    name: "Papil",
    archetype: "Paladin",
    party: "Spice Girls",
    image: Papil,
    description: "An otter in heavy plate armor who cries a lot.",
    artist: "Gadundra",
  },
  {
    id: 22,
    name: "Qorvo, the Storm Herald",
    archetype: "Barbarian/Sorcerer",
    party: "Dust Bandits",
    image: Qorvo,
    description: "Hmm, yes, give me your hat.",
    artist: "Gadundra",
  },
  {
    id: 23,
    name: "Dune Do'skryn",
    archetype: "Barbarian/Rogue/Sorcerer",
    party: "Spice Girls",
    image: Dune,
    description:
      "A mystic of sorts who once bested all of the stones in the Doblearan city of Myth Concordia. ",
    artist: "wd_1142645",
  },
  {
    id: 24,
    name: "Fennell",
    archetype: "Fighter",
    party: "Derelict",
    image: Fennell,
    description:
      "A wild ordenne who throws herself at mach speeds to destroy her enemies.",
    artist: "wd_1142645",
  },
  {
    id: 25,
    name: "Reed",
    archetype: "Warlock",
    party: "Strange Tidings",
    image: Reed,
    description: "Warlock boy",
    artist: "wd_1142645",
  },
  {
    id: 26,
    name: "Vaal'amora",
    archetype: "Bard",
    party: "All-Adventure",
    image: Vaalamora,
    description:
      "A student that graduated herself from the Academy of All-Adventure after she created various toxins that far exceeded many laws of the floating city of Vallenis.",
    artist: "wd_1142645",
  },
  {
    id: 27,
    name: "Ferrum Animo",
    archetype: "Rogue/Monk",
    party: "Secrets of the Wellspring",
    image: Ferrum,
    description:
      "A kalashtar with psychic abilities. He was reincarnated as a drow in order to remove the extraplanar entity that inhabited his brain. Afterwards, he became a monk with a more practiced control over his body. ",
    artist: "skel101",
  },
  {
    id: 28,
    name: "Fustair Llyvium",
    archetype: "Cleric/Fighter",
    party: "Dust Bandits",
    description:
      "A human cleric who served Erraquia and Caldustitia. He helped to retrieve artifacts from ancient temples devoted to both deities. ",
  },
  {
    id: 29,
    name: "Fujiwara",
    archetype: "Wizard",
    party: "Hell's Horizon",
    description:
      "A shattered savant that has a gazer familiar. Since his legs no longer function, he has to ride a cloud, giving him the ability to fly. ",
  },
  {
    id: 30,
    name: "Caladbolg",
    archetype: "Paladin",
    party: "Hell's Horizon",
    description: "This dragonborn paladin.",
  },
  {
    id: 31,
    name: "Banner",
    archetype: "Warlock",
    party: "Hell's Horizon",
    description:
      "A slug-like being reincarnated this former commander into a goop person.",
  },
  {
    id: 32,
    name: "Cherish",
    archetype: "Bard",
    party: "String the Quarry",
    description:
      "A tiefling who loves money. She became the mayor of Vallenis after the events of String the Quarry, and she is also in possession of a ring of wishes. ",
  },
  {
    id: 33,
    name: "D-89",
    archetype: "Gunslinger",
    party: "Dust Bandits",
    description:
      "A warforged who led an uprising in Jakul. It now leads a nation of warforged in the ruins of Jakul. ",
  },
  {
    id: 99,
    name: "Little Fella",
    archetype: "Bard",
    party: "N/A",
    image: Fella,
    description: "It shall not be remembered.",
    artist: "Unknown",
  },
];

export default heroData;
