import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const { component: Component, ...rest } = props;
  const user = useSelector(({ authReducer }) => authReducer.user);

  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
