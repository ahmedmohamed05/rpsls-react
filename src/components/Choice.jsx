import PropTypes from "prop-types";

export default function Choice({
  whoChoice,
  icon,
  altText,
  text,
  borderColor,
  isWinner,
}) {
  return (
    <div className={`choice ${whoChoice} ${isWinner && "winner"}`}>
      <p>{text}</p>

      <div
        className="choice-icon"
        style={{ border: `solid 15px ${borderColor}` }}
      >
        <img src={icon} alt={altText} />
      </div>
    </div>
  );
}

Choice.propTypes = {
  whoChoice: PropTypes.string,
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
  borderColor: PropTypes.string,
  isWinner: PropTypes.bool.isRequired,
};
