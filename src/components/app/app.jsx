import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const handleHeaderClick = () => {};

const App = (props) => {

  const {rentsCount, offers} = props;

  return (
    <Main
      rentsCount={rentsCount}
      offers={offers}
      onHeaderClick={handleHeaderClick}
    />
  );
};

App.propTypes = {
  rentsCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    premiumLabel: PropTypes.bool.isRequired,
    inBookmarks: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
