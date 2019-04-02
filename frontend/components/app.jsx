import React from 'react';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import FooterContainer from './footer/footer';
import ProjectIndexContainer from './project/project_index_container';
import ProjectShowContainer from './project/project_show_container';
import ProjectDetailsContainer from './project/new_project_details';
import CommentsIndexContainer from './project/comments_index_container';
import Splash from './splash/splash';
import { AuthRoute } from '../api_util/route_api_util/route_util';
// import { ProtectedRoute } from '../api_util/route_utils';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Modal from './modal/modal';

library.add(faSearch)

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer name="top"/>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
      <Route exact path="/cindex" component={CommentsIndexContainer} />
      <Route exact path="/index" component={ProjectIndexContainer} />
      <Route exact path="/projectdetails" component={ProjectDetailsContainer} />
      <Route exact path="/search/:query" component={ProjectIndexContainer} />
      {/* <Route exact path="/category/:item" component={ProjectIndexContainer} /> */}
      <Route exact path="/" component={Splash} />
      {/* <Route exact path="/projects/:projectId/comments" component={CreateCommentContainer} /> */}
      <Redirect to="/" path="/" component={Splash} />
    </Switch>
    <footer>
      <FooterContainer />
    </footer>
  </div>
);

export default App;

// {/* <ProtectRoute />  use this to be able to comment only if logged in */ }
// reference route_utils.jsx

