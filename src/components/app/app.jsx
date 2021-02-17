import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen.jsx';
import Login from '../login/login.jsx';
import Favorites from '../favorites/favorites.jsx';
import Room from '../room/room.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';

const App = (props) => {
  const {cardsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen cardsCount={cardsCount} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: PropTypes.array.isRequired,
};

export default App;
