import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const Cards = (props) => {
  const {rentsNames} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {rentsNames.map((rent, id) => {
        return <Card
          key={id}
          rentName={rent}
        />;
      })}
    </div>
  );
};

Cards.propTypes = {
  rentsNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Cards;
