import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

function PrivateRoute({component, isAuthenticated, ...rest}: any) {
    return (
      <Route {...rest} render={(props) => isAuthenticated === true ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
      />
    )
  }

  export default PrivateRoute;
