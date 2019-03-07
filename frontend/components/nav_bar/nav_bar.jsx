import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Splash from '../splash/splash';

const Greeting = ({ currentUser, logout, newProjectButton, closeModal}) => {
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   logout();
  //   // return (<Redirect to="/" component={Splash} />)
  // };

  const sessionLinks = () => (
    <>
    <nav className="login-signup">
      <div className="session-title">
        <div className="nav-logo-title">
          <img id='nav-bar-logo' src={window.images.logo_hp} />
          <h3><a href="/">Wizardables</a></h3>
        </div>
        <form className="search-form">
          <input type="text" placeholder="  Let's Make ..." name="search" />
          <button type="submit"><FontAwesomeIcon className="search-icon" icon="search" /></button>
          <Link to="/index" id="featured-proj-btn">Featured</Link>
          {newProjectButton}
          {/* <button onClick={() => openModal('newProject')} id="new-proj-btn">Create a Wizardable</button> */}
        </form>
      </div>
      {/* <div className="nav-bar-right-end"> */}
        <div className="session-btns">
          <img className='welcome-user' src={window.images.hp_navbar_logo} />    
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      {/* </div> */}
    </nav>
    <div className="empty-below-nav-bar">
        <img id='nav-bar-slogan-logo' src={window.images.slogan_logo} />
      <span>AT HOGWARTS, help is always given to those who ask for it.</span>
    </div>
    </>
  );
  const personalGreeting = () => (
    <>
      <nav className="login-signup">
        <div className="session-title">
          <div className="nav-logo-title">
            <img id='nav-bar-logo' src={window.images.logo_hp} />
            <h3><a href="/">Wizardables</a></h3>
          </div>
          <form className="search-form">
            <input type="text" placeholder="  Let's Make ..." name="search" />
            <button type="submit"><FontAwesomeIcon className="search-icon" icon="search" /></button>
            <Link to="/index" id="featured-proj-btn">Featured</Link>
            {newProjectButton}
            {/* <button onClick={() => openModal('newProject')} id="new-proj-btn">Create a Wizardable</button> */}
          </form>
        </div>
        {/* <div className="nav-bar-right-end"> */}
          <div className="session-btns">
          <img className='welcome-user' src={window.images.freedobby} />
            <p className="header-name">Hello, {currentUser.username}</p>
            <Link to="/" className="header-button" onClick={logout} >Log Out</Link >
          </div>
        {/* </div> */}
      </nav>
      <div className="empty-below-nav-bar">
        <img id='nav-bar-slogan-logo' src={window.images.slogan_logo} />
        <span>AT HOGWARTS, help is always given to those who ask for it.</span>
      </div>
    </>
    // <hgroup className="header-group">
    //   <h2 className="header-name">Hi, {currentUser.username}!</h2>
    //   <button className="header-button" onClick={logout}>Log Out</button>
    // </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;


// export default ({currentUser, logout}) => {
//   const display = currentUser ? (
//     <div>
//       <p>Hello, { currentUser.username }</p>
//       <button onClick={ logout }>Log Out</button>
//     </div>
//     ) : (
//     <div>
//       <Link className="btn" to="/signUp">Sign Up</Link>
//       <Link className="btn" to="/login">Log In</Link>
//     </div>
//   )

//   return (
//     <header className="nav-bar">
//       <h1 className="logo">Wizardables</h1>
//       <div>
//         { display }
//       </div>
//     </header>
//   );
// }