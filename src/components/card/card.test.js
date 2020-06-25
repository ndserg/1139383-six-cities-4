import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";

it(`Render Card`, () => {
  const tree = renderer
    .create(<Card
      offer={
        {
          premiumLabel: true,
          inBookmarks: false,
          rating: 80,
          image: `img/apartment-01.jpg`,
          price: 120,
          priceText: `night`,
          placeName: `Beautiful & luxurious apartment at great location`,
          placeType: `Apartment`,
        }
      }
      onHeaderClick={() => {}}
      onMouseOverCard={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
