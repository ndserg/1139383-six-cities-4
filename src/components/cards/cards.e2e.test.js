import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cards from "./cards";
import {OFFERS} from "../../mocks/offers.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On Header Click should open recent card`, () => {
  const onHeaderClick = jest.fn();
  const offerActive = OFFERS[0];

  const cards = mount(
      <Cards
        offers={OFFERS}
        offer={offerActive}
        onHeaderClick={onHeaderClick}
      />
  );

  const offerHeader = cards.find(`.place-card__name a`).at(0);

  offerHeader.simulate(`click`);

  expect(onHeaderClick).toHaveBeenCalledTimes(1);
  expect(onHeaderClick.mock.calls[0][0]).toMatchObject(offerActive);
});
