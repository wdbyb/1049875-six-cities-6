import React from 'react';
import PropTypes from 'prop-types';
import MainScreenComponent from '../main-screen/main-screen.jsx';

const App = (props) => {
  return (
    <>
      <MainScreenComponent cardsCount={props.cardsCount} />
    </>
  );
};

App.propTypes = {
  cardsCount: PropTypes.array.isRequired,
};

export default App;
