import { Route, Redirect } from "react-router-dom";
import Admin from '../../../pages/Admin'
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      render={(props) =>
        localStorage.getItem("skinali-user") ? (
          <Redirect
            to={{ pathname: "/admin" }}
          />
        ) : (
          <Redirect
            to={{ pathname: "/auth" }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;