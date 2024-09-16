import PropTypes from "prop-types";
import pentagon from "../assets/bg-pentagon.svg";

export default function Game({ children }) {
  return (
    <div className="items-line-map">
      <img className="pentagon" src={pentagon} alt="Choice an item" />
      <div className="game-items">{children}</div>
    </div>
  );
}
Game.propTypes = {
  children: PropTypes.node.isRequired,
};
