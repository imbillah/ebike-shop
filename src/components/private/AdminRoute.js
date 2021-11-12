import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  const { user, admin, loading } = useAuth();
  if (loading) {
    return "";
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
}

export default PrivateRoute;
