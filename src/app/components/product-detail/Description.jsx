import React from "react";
import CartIcon from "./Icons/CartIcon";
import QuantityButton from "./QuantityButton";

const Description = ({
  onQuant,
  onAdd,
  onRemove,
  onSetOrderedQuant,
  product,
}) => {
  return (
    <section className="description">
      <p className="pre">{product.brand}</p>
      <h1>{product.productName}</h1>
      <p className="pre">Time left: 8h 12m 52s</p>
      <p className="desc">{product.description}</p>
      <div className="price">
        <div className="main-tag">
          <p>{product.price} лв.</p>
          <p>21 bids</p>
        </div>
        <s>Previous bid: {product.price} лв.</s>
      </div>
      <div className="buttons">
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          <CartIcon />
          Submit bid
        </button>
      </div>
    </section>
  );
};

export default Description;
