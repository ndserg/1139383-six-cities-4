import React from "react";
import renderer from "react-test-renderer";
import Labels from "./labels";

it(`Render Labels`, () => {
  const tree = renderer
    .create(<Labels
      label={`Premium`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
