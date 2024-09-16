import propTypes from "prop-types";

export default function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

Wrapper.propTypes = {
  children: propTypes.node,
};
