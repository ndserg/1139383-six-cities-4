import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {OfferProps} from "../../propTypes.js";

const handleHeaderClick = () => {};

const App = ({rentsCount, offers}) => {

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
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProps)).isRequired
};

export default App;
