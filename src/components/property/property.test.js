import React from "react";
import renderer from "react-test-renderer";
import Property from "./Property";
import {OFFERS} from "../../mocks/offers.js";

it(`Render Property`, () => {
  const tree = renderer
    .create(<Property
      offer={OFFERS[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
