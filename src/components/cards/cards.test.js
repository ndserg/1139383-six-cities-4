import React from "react";
import renderer from "react-test-renderer";
import Cards from "./cards";

it(`Render Cards`, () => {
  const tree = renderer
    .create(<Cards
      offers={[
        {
          premiumLabel: true,
          inBookmarks: false,
          rating: 80,
          image: `img/apartment-01.jpg`,
          price: 120,
          priceText: `night`,
          placeName: `Beautiful & luxurious apartment at great location`,
          placeType: `Apartment`,
        }, {
          premiumLabel: false,
          inBookmarks: true,
          rating: 80,
          image: `img/room.jpg`,
          price: 80,
          priceText: `night`,
          placeName: `Wood and stone place`,
          placeType: `Private room`,
        }, {
          premiumLabel: false,
          inBookmarks: false,
          rating: 100,
          image: `img/apartment-02.jpg`,
          price: 132,
          priceText: `night`,
          placeName: `Canal View Prinsengracht`,
          placeType: `Apartment`,
        }, {
          premiumLabel: true,
          inBookmarks: false,
          rating: 60,
          image: `img/apartment-03.jpg`,
          price: 180,
          priceText: `night`,
          placeName: `Nice, cozy, warm big bed apartment`,
          placeType: `Apartment`,
        }
      ]}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
