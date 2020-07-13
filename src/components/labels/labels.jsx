import React from 'react';
import PropTypes from 'prop-types';

const Labels = ({label}) => {
  return (label === `none`) ? `` : <div className="place-card__mark"><span>{label}</span></div>;
};

Labels.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Labels;
