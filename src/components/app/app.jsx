import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen.jsx';
import Login from '../login/login.jsx';
import Favorites from '../favorites/favorites.jsx';
import Room from '../room/room.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import * as types from '../../props/offers.js';

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offers={offers} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers} />
        </Route>
        <Route exact path="/offer/:id" render={(serviceProps) => <Room {...serviceProps} offers={offers} />}>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(types.offer).isRequired,
};

export default App;
