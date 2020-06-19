import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  RENTS_COUNT: 312
};

const RENTS_NAMES = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

ReactDOM.render(
    <App
      rentsCount={Settings.RENTS_COUNT}
      rentsNames={RENTS_NAMES}
    />,
    document.querySelector(`#root`)
);
