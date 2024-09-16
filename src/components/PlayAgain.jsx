import PropTypes from "prop-types";

export default function PlayAgain({ resultText, handlePlayAgain }) {
  return (
    <div className="result-middle">
      <div className="text">
        <p>{resultText}</p>
      </div>
      <button className="btn" aria-label="Play again" onClick={handlePlayAgain}>
        PLAY AGAIN
      </button>
    </div>
  );
}

PlayAgain.propTypes = {
  resultText: PropTypes.string,
  handlePlayAgain: PropTypes.func,
};
