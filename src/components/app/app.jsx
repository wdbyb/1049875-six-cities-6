import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen.jsx';

const App = (props) => {
  return (
    <MainScreen cardsCount={props.cardsCount} />
  );
};

App.propTypes = {
  cardsCount: PropTypes.array.isRequired,
};

export default App;
