import { useState } from "react";
import { items } from "./items";
import { calculateWinner, randomItem } from "./functions";

import Header from "./components/Header";
import RulesCard from "./components/RulesCard";
import Game from "./components/Game";
import Result from "./components/Result";
import GameItems from "./components/GameItems";
import OpenRulesBtn from "./components/OpenRulesBtn";

import "./style.css";

function App() {
  const [openRules, setOpenRules] = useState("close");
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(0);

  function handleUserChoice(e) {
    const btn = e.currentTarget;
    const itemName = btn.getAttribute("data-item");
    const obj = items.filter((item) => item.name == itemName).at(0);

    setUserChoice(obj);

    const item = randomItem();
    setComputerChoice(item);

    const winner = calculateWinner(obj, item);
    setWinner(winner);

    setScore(score + winner);
  }
  function playAgainHandler() {
    setUserChoice(null);
    setComputerChoice(null);
  }

  return (
    <div className="wrapper">
      <Header score={score} />

      <div className="game">
        {!userChoice && (
          <Game>
            <GameItems handleUserChoice={handleUserChoice} />
          </Game>
        )}
        {userChoice && (
          <Result
            winner={winner}
            userChoice={userChoice}
            computerChoice={computerChoice}
            handlePlayAgain={playAgainHandler}
          />
        )}
      </div>

      <RulesCard
        openRules={openRules}
        handleCloseRules={() => setOpenRules("close")}
      />

      <OpenRulesBtn setOpenRules={() => setOpenRules("open")} />
    </div>
  );
}

export default App;
