import PropTypes from "prop-types";

export default function Item({
  name,
  iconSrc,
  altText,
  borderColor,
  clickHandler,
}) {
  return (
    <div
      className={`game-item ${name}`}
      style={{ border: `solid 15px ${borderColor}` }}
    >
      <button title={altText} onClick={clickHandler} data-item={name}>
        <img src={iconSrc} alt={altText} />
      </button>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  borderColor: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};
