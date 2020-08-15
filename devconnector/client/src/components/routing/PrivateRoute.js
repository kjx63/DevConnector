import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      // If not authenticated, redirect to '/login'
      !isAuthenticated && !loading ? (
        <Redirect to='login' />
      ) : (
        // Else, go to whatever component will load
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const napStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(napStateToProps)(PrivateRoute);
