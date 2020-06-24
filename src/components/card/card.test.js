import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";

it(`Render Card`, () => {
  const tree = renderer
    .create(<Card
      rentName={`Beautiful & luxurious apartment at great location`}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
