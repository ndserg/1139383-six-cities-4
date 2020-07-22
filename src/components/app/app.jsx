import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from '../main/main';
import Property from '../property/property';
import {OfferProps} from "../../propTypes.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = null;
  }

  _renderMainPage() {
    const {rentsCount, offers} = this.props;

    if (this.state === null) {
      return (
        <Main
          rentsCount={rentsCount}
          offers={offers}
          onHeaderClick={(activeCard) => {
            this.setState({activeOffer: activeCard});
          }}
        />
      );
    }

    return (
      <Property
        offer={this.state.activeOffer}
      />);
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainPage()}
          </Route>
          <Route exact path="/offer">
            <Property
              offer={offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  rentsCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(OfferProps)).isRequired
};

export default App;
