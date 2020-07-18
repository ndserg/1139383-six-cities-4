import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";
import {OFFERS} from "../../mocks/offers.js";

it(`Render Card`, () => {
  const tree = renderer
    .create(<Card
      offer={OFFERS[0]}
      onHeaderClick={() => {}}
      onMouseOverCard={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
