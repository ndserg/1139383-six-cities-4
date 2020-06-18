import React from "react";
import Card from "./card.jsx";
import PropTypes from "prop-types";

const Cards = (props) => {
  const {rentsNames} = props;
  const cards = rentsNames.map((rent, id) => {
    return <Card
      key = {id}
      rentName = {rent}
    />;
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>
  );
};

Cards.propTypes = {
  rentsNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Cards;
