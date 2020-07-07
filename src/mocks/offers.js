import {bool, number, string} from 'prop-types';

const labelTypes = {
  default: `none`,
  premium: `Premium`,
  new: `New`
};

const OFFERS = [
  {
    label: labelTypes.premium,
    inBookmarks: false,
    rating: 80,
    image: `img/apartment-01.jpg`,
    price: 120,
    priceText: `night`,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  }, {
    label: labelTypes.default,
    inBookmarks: true,
    rating: 50,
    image: `img/room.jpg`,
    price: 80,
    priceText: `night`,
    name: `Wood and stone place`,
    type: `Private room`,
  }, {
    label: labelTypes.new,
    inBookmarks: false,
    rating: 100,
    image: `img/apartment-02.jpg`,
    price: 132,
    priceText: `night`,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
  }, {
    label: labelTypes.default,
    inBookmarks: false,
    rating: 60,
    image: `img/apartment-03.jpg`,
    price: 180,
    priceText: `night`,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
  }
];

const OfferProps = {
  label: string.isRequired,
  inBookmarks: bool.isRequired,
  rating: number.isRequired,
  image: string.isRequired,
  price: number.isRequired,
  priceText: string.isRequired,
  name: string.isRequired,
  type: string.isRequired
};

export {
  OFFERS,
  OfferProps
};
