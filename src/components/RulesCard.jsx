import cross from "../assets/icon-close.svg";
import rules from "../assets/image-rules-bonus.svg";
import PropTypes from "prop-types";

export default function RulesCard({ openRules, handleCloseRules }) {
  const gameRulesAltText = `
    [1]: Scissors beats paper and lizard 
    [2]: Paper beats rock and spock
    [3]: Rock beats lizard and scissors
    [4]: Lizard beats spock and paper
    [5]: Spock beats scissors rock`;

  return (
    <div className={`rules-card ${openRules}`}>
      <p className="text">Rules</p>

      <div className="close-btn" onClick={handleCloseRules}>
        <button title="Close rules card">
          <img src={cross} alt="Cose rules card button" />
        </button>
      </div>

      <div className="card-image">
        <img
          src={rules}
          alt={`Game Rules which are the following: ${gameRulesAltText}`}
        />
      </div>
    </div>
  );
}

RulesCard.propTypes = {
  openRules: PropTypes.string,
  handleCloseRules: PropTypes.func.isRequired,
};
