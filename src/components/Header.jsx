import logo from "../assets/logo-bonus.svg";
import PropTypes from "prop-types";

export default function Header({ score }) {
  return (
    <div className="score-bar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="score">
        <span className="text">Score</span>
        <span className="number">{score}</span>
      </div>
    </div>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
};
