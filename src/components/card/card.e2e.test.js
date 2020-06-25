import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On Mouse Over should get offer info`, () => {
  const onMouseOverCard = jest.fn();
  const offerActive =
    {
      premiumLabel: true,
      inBookmarks: false,
      rating: 80,
      image: `img/apartment-01.jpg`,
      price: 120,
      priceText: `night`,
      placeName: `Beautiful & luxurious apartment at great location`,
      placeType: `Apartment`,
    };

  const card = shallow(
      <Card
        offer={offerActive}
        onHeaderClick={() => {}}
        onMouseOverCard={onMouseOverCard}
      />
  );

  const offerCard = card.find(`.place-card`);

  offerCard.simulate(`mouseover`);

  expect(onMouseOverCard).toHaveBeenCalledTimes(1);
  expect(onMouseOverCard.mock.calls[0][0]).toMatchObject(offerActive);
});
