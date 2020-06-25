import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from "./mocks/offers.js";

const Settings = {
  RENTS_COUNT: 312
};


ReactDOM.render(
    <App
      rentsCount={Settings.RENTS_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
