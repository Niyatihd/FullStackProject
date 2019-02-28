import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute } from '../api_util/route_api_util/route_util';
// import { ProtectedRoute } from '../api_util/route_utils';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
      </Link>
      {/* <NavBarContainer /> */}
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/" component={NavBarContainer} />
    </Switch>
  </div>
);

export default App;

// {/* <ProtectRoute />  use this to be able to comment only if logged in */ }
// reference route_utils.jsx