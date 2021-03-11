import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthStatus} from '../../const.js';

const PrivateRoute = ({render, path, exact, authStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authStatus === AuthStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: state.authStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
