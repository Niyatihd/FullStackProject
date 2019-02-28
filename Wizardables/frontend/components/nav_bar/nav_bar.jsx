import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <h3>Wizardables</h3>
      <div id="search-btn">
        <button>Create a Wizardable</button>
        <input type="text" placeholder="Search.."></input>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
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