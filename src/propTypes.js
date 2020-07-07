import PropTypes from 'prop-types';

export const OfferProps = {
  label: PropTypes.string.isRequired,
  inBookmarks: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
