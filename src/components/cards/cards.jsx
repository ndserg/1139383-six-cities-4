import React from "react";
import PropTypes from 'prop-types';
import Card from '../card/card';

class Cards extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };

    this._handleHover = this._handleHover.bind(this);
  }

  render() {
    const {offers, onHeaderClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, id) => (
          <Card
            key={id}
            offer={offer}
            onHeaderClick={onHeaderClick}
            onMouseOverCard={this._handleHover}
          />
        ))}
      </div>
    );
  }

  _handleHover(activeCard) {
    this.setState({activeOffer: activeCard});
  }
}

Cards.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    premiumLabel: PropTypes.bool.isRequired,
    inBookmarks: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired,
  onHeaderClick: PropTypes.func.isRequired
};

export default Cards;
