import React from 'react';
import PropTypes from 'prop-types';
import MainScreenComponent from '../main-screen/main-screen.jsx';

const App = (props) => {
  console.log(props);

  return (
    <>
      <MainScreenComponent name={props.name} />
    </>
  );
};

// App.propTypes = {
//   props: PropTypes.array.isRequired,
// };

export default App;
