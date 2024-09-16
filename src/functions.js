import { items } from "./items";

export function randomItem() {
  let index = Math.floor(Math.random() * items.length);
  let item = items[index];
  return item;
}

export function calculateWinner(
  { name: userChoice },
  { name: computerChoice }
) {
  if (userChoice == computerChoice) return 0;

  const userObject = items.filter((item) => item.name == userChoice)[0];

  if (userObject.winOver.filter((item) => item == computerChoice).length > 0) {
    return 1;
  } else {
    return -1;
  }
}
