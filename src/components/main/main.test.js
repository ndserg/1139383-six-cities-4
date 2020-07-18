import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {OFFERS} from "../../mocks/offers.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      rentsCount={4}
      offers={OFFERS}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
