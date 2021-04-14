import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isLoggedIn } from "../utils/Utility";
import { PATH } from "./../config/routes";
import Login from "./auth/Login";
import RedirectAfterFBSignIn from "./common/Redirect";
import Dashboard from "./dashboard";

/**
 * css
 */
import "../assets/css/dev.css";

/**
 * Authenticated routes middleware
 * @param {*} Component
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to={PATH.LOGIN} />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.object,
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <React.StrictMode>
          <BrowserRouter>
            <React.Fragment>
              <Switch>
                <Route path={PATH.LOGIN} exact component={Login} />
                <Route
                  path={PATH.REDIRECT}
                  exact
                  component={RedirectAfterFBSignIn}
                />
                <PrivateRoute
                  path={PATH.INDEX_PAGE}
                  exact
                  component={Dashboard}
                />
              </Switch>
            </React.Fragment>
          </BrowserRouter>
        </React.StrictMode>
      </React.Fragment>
    );
  }
}

export default App;
