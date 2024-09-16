import PropTypes from "prop-types";
import Choice from "./Choice";
import PlayAgain from "./PlayAgain";

export default function Result({
  winner,
  userChoice,
  computerChoice,
  handlePlayAgain,
}) {
  let resultText;

  switch (winner) {
    case -1:
      resultText = "YOU LOSE";
      break;
    case 0:
      resultText = "IT'S A TIE";
      break;
    case 1:
      resultText = "YOU WIN";
      break;
  }

  // TODO: countdown
  // useEffect(() => {
  //   let timer;
  //   if (counter > 1) {
  //     timer = setInterval(() => {
  //       setCounter(counter - 1);
  //     }, 300);
  //     resultText = counter;
  //   }

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [counter]);

  return (
    <div className="result">
      <Choice
        whoChoice={`user-choice ${userChoice.name}`}
        altText={userChoice.altText}
        text={"YOU PICKED"}
        icon={userChoice.iconSrc}
        borderColor={userChoice.borderColor}
        isWinner={winner == 1}
      />

      <PlayAgain handlePlayAgain={handlePlayAgain} resultText={resultText} />

      <Choice
        whoChoice={`computer-choice ${computerChoice.name}`}
        altText={computerChoice.altText}
        text={"THE HOUSE PICKED"}
        icon={computerChoice.iconSrc}
        borderColor={computerChoice.borderColor}
        isWinner={winner == -1}
      />
    </div>
  );
}

Result.propTypes = {
  winner: PropTypes.number.isRequired,
  userChoice: PropTypes.object.isRequired,
  computerChoice: PropTypes.object.isRequired,
  handlePlayAgain: PropTypes.func,
};
