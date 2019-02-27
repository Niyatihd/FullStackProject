import React from 'react';
import { Route} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute } from '../api_util/route_api_util/route_utils';
// import { ProtectedRoute } from '../api_util/route_utils';

export default () => (
  <div>
      <Route path='/' component={ NavBarContainer } />
      <AuthRoute path='/signup' component={ SignupContainer } />
  </div>
)

// {/* <ProtectRoute />  use this to be able to comment only if logged in */ }
// reference route_utils.jsx