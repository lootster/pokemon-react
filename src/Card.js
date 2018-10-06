import React from "react";

const Card = props => {
  const {
    pokemon: { name, type, price, image }
  } = props;
  return (
    <div className="listItem" id={type}>
      <img src={image} alt="image" />
      <h3 className="listItem__name">{name}</h3>
      <h3 className="listItem__name">
        Pokemon Type: {type.charAt(0).toUpperCase() + type.slice(1)}
      </h3>
      <div className="listItem__price">
        <div className="listItem__priceTxt">{price}</div>
      </div>
    </div>
  );
};

export default Card;
