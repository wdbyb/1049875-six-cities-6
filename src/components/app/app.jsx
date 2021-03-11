import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen.jsx';
import Login from '../login/login.jsx';
import Favorites from '../favorites/favorites.jsx';
import Room from '../room/room.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id" render={(serviceProps) => <Room {...serviceProps} />}>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
