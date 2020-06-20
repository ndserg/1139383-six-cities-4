import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {

  const {rentsCount, rentsNames} = props;

  return (
    <Main
      rentsCount={rentsCount}
      rentsNames={rentsNames}
    />
  );
};

App.propTypes = {
  rentsCount: PropTypes.number.isRequired,
  rentsNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
