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
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
