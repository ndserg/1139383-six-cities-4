import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import Card from '../card/card';

class Cards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }


  render() {
    const {offers, onHeaderClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, id) => {
          return <Card
            key={id}
            offer={offer}
            onHeaderClick={onHeaderClick}
            onMouseOverCard={(activeCard) => {
              this.setState({
                activeOffer: activeCard
              });
            }}
          />;
        })}
      </div>
    );
  }
}

Cards.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onHeaderClick: PropTypes.func.isRequired
};

export default Cards;
