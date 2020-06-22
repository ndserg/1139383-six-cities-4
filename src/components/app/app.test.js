import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      rentsCount={4}
      rentsNames={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
