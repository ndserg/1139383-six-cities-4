import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {OFFERS} from "../../mocks/offers.js";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header be clicked`, () => {
  const onHeaderClick = jest.fn();

  const main = mount(
      <Main
        rentsCount={4}
        offers={OFFERS}
        onHeaderClick={onHeaderClick}
      />
  );

  const headerClickable = main.find(`.place-card__name a`);

  headerClickable.forEach((header) => header.simulate(`click`, {preventDefault() {}}));

  expect(onHeaderClick.mock.calls.length).toBe(headerClickable.length);
});
