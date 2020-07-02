import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import offers from "../../mocks/offers.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      rentsCount={4}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
