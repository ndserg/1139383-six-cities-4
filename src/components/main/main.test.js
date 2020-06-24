import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      rentsCount={4}
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
