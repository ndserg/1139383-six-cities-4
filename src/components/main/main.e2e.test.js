import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header be clicked`, () => {
  const onHeaderClick = jest.fn();

  const main = mount(
      <Main
        rentsCount={4}
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
        onHeaderClick={onHeaderClick}
      />
  );

  const headerClickable = main.find(`.place-card__name a`);

  headerClickable.forEach((header) => header.simulate(`click`, {preventDefault() {}}));

  expect(onHeaderClick.mock.calls.length).toBe(headerClickable.length);
});
