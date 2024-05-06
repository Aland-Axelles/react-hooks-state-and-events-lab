
import React, { useState }from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemClass = inCart ? "in-cart" : "";

  function handleAddRemoveClick(){
    setInCart(!inCart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddRemoveClick} className="add">
      {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
