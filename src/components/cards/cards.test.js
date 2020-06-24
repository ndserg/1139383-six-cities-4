import React from "react";
import renderer from "react-test-renderer";
import Cards from "./cards";

it(`Render Cards`, () => {
  const tree = renderer
    .create(<Cards
      rentsNames={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`
      ]}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
