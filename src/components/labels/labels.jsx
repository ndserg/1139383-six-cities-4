import React from 'react';
import PropTypes from 'prop-types';

const Labels = ({label}) => {

  const getLabel = () => {
    switch (label) {
      case (`none`):
        return ``;
      case (label):
        return <div className="place-card__mark">
          <span>{label}</span>
        </div>;
      default:
        return ``;
    }
  };

  return (
    getLabel()
  );
};

Labels.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Labels;
