import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

function AdminRoute({ children, ...rest }) {
  const { user, admin } = useAuth();
  if (!admin) {
    return (
      <div className="container text-center mt-5">
        <Spinner animation="grow" variant="primary" />
      </div>
    );
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
              pathname: "/error",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
}

export default AdminRoute;
