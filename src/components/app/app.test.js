import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {OFFERS} from "../../mocks/offers.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      rentsCount={4}
      offers={OFFERS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
