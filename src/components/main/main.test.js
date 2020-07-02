import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import offers from "../../mocks/offers.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      rentsCount={4}
      offers={offers}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
