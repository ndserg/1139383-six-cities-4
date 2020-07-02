import React from "react";
import renderer from "react-test-renderer";
import Cards from "./cards";
import offers from "../../mocks/offers.js";

it(`Render Cards`, () => {
  const tree = renderer
    .create(<Cards
      offers={offers}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
