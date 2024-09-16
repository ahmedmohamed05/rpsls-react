import PropTypes from "prop-types";

export default function OpenRulesBtn({ setOpenRules }) {
  return (
    <div>
      <div className="rules">
        <button title="Open rules card" onClick={() => setOpenRules("open")}>
          RULES
        </button>
      </div>
    </div>
  );
}

OpenRulesBtn.propTypes = {
  setOpenRules: PropTypes.func.isRequired,
};
