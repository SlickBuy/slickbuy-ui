import React from "react";

const QuantityButton = ({ onQuant, onRemove, onAdd }) => {
  return (
    <div className="amount">
      <button className="minus" onClick={onRemove} disabled={onQuant === 0}>
        <img src='/icon-minus.svg' alt="icon-minus" />
      </button>
      <p>{onQuant}</p>
      <button className="plus" onClick={onAdd} disabled={onQuant === 100}>
        <img src='/icon-plus.svg' alt="icon-plus" />
      </button>
    </div>
  );
};

export default QuantityButton;
