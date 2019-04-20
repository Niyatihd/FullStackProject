import React from "react";
import { Link, Redirect } from "react-router-dom";
import SearchContainer from "./search_container";

const Greeting = ({ currentUser, logout, newProjectButton, closeModal }) => {
  const sessionLinks = () => (
    <>
      <nav className="login-signup">
        <div className="session-title">
          <div className="nav-logo-title">
            <img id="nav-bar-logo" src={window.images.logo_hp} />
            <h3>
              <a href="/">Wizardables</a>
            </h3>
          </div>
          <SearchContainer newProjectButton={newProjectButton} />
        </div>
        <div className="session-btns">
          <img className="welcome-user" src={window.images.hp_navbar_logo} />
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
      <div className="empty-below-nav-bar">
        <img id="nav-bar-slogan-logo" src={window.images.slogan_logo} />
        <span>AT HOGWARTS, help is always given to those who ask for it.</span>
      </div>
    </>
  );
  const personalGreeting = () => (
    <>
      <nav className="login-signup">
        <div className="session-title">
          <div className="nav-logo-title">
            <img id="nav-bar-logo" src={window.images.logo_hp} />
            <h3>
              <a href="/">Wizardables</a>
            </h3>
          </div>
          <SearchContainer newProjectButton={newProjectButton} />
        </div>

        <div className="session-btns">
          <img className="welcome-user" src={window.images.freedobby} />
          <p className="header-name">Hello, {currentUser.username}</p>
          <Link to="/" className="header-button" onClick={logout}>
            Log Out
          </Link>
        </div>
      </nav>
      <div className="empty-below-nav-bar">
        <img id="nav-bar-slogan-logo" src={window.images.slogan_logo} />
        <span>AT HOGWARTS, help is always given to those who ask for it.</span>
      </div>
    </>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
