// icons
import lizard from "./assets/icon-lizard.svg";
import paper from "./assets/icon-paper.svg";
import scissors from "./assets/icon-scissors.svg";
import spock from "./assets/icon-spock.svg";
import rock from "./assets/icon-rock.svg";

/*
  --scissors-gradient: hsl(39, 89%, 49%), hsl(40, 84%, 53%);
  --paper-gradient: hsl(230, 89%, 62%), hsl(230, 89%, 65%);
  --rock-gradient: hsl(349, 71%, 52%), hsl(349, 70%, 56%);
  --lizard-gradient: hsl(261, 73%, 60%), hsl(261, 72%, 63%);
  --cyan: hsl(189, 59%, 53%), hsl(189, 58%, 57%);

*/

export const items = [
  {
    name: "scissors",
    iconSrc: scissors,
    altText:
      "Scissors Item can win over paper and lizard, And lose from rock and spock",
    borderColor: "hsl(40, 84%, 53%)",
    winOver: ["paper", "lizard"],
  },
  {
    name: "paper",
    iconSrc: paper,
    altText:
      "Paper Item can win over rock and spock, And lose from scissors and lizard",
    borderColor: " hsl(230, 89%, 65%)",
    winOver: ["rock", "spock"],
  },
  {
    name: "rock",
    iconSrc: rock,
    altText:
      "Rock Item can win over scissors and lizard, And lose from paper and spock",
    borderColor: "hsl(349, 70%, 56%)",
    winOver: ["scissors", "lizard"],
  },
  {
    name: "lizard",
    iconSrc: lizard,
    altText:
      "Lizard Item can win over spock and paper, And lose from rock and scissors",
    borderColor: "hsl(230, 89%, 65%)",
    winOver: ["spock", "paper"],
  },
  {
    name: "spock",
    iconSrc: spock,
    altText:
      "Spock Item can win over scissors and rock, And lose from paper and lizard",
    borderColor: "hsl(189, 58%, 57%)",
    winOver: ["scissors", "rock"],
  },
];
