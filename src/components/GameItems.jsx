import Item from "./Item";
import { items } from "../items";
import PropTypes from "prop-types";

export default function GameItems({ handleUserChoice }) {
  return items.map((item) => (
    <Item key={item.name} {...item} clickHandler={handleUserChoice} />
  ));
}

GameItems.propTypes = {
  handleUserChoice: PropTypes.func.isRequired,
};
