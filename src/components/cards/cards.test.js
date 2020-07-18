import React from "react";
import renderer from "react-test-renderer";
import Cards from "./cards";
import {OFFERS} from "../../mocks/offers.js";

it(`Render Cards`, () => {
  const tree = renderer
    .create(<Cards
      offers={OFFERS}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
