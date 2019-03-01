import React from 'react';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleInput(type) {
    return (
      (e) => {
        this.setState({
          [type]: e.currentTarget.value
        });
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  
  handleDemoSubmit(e) {
    debugger
    e.preventDefault();

    const user = {
                  username: "freedobby",
                  email: "professor_dobby@hogwarts.com",
                  password: "dobbyisafreeelf"
                };
    this.props.demoLogin(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}: `}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  renderAlternateMsg() {
   return this.props.formType === "signup" ?
        <span>Already a member? {this.props.navLink}</span>
        :
        <span>New to Wizardables? {this.props.navLink}</span>
  }
  // renderAlternateMsg() {
  //   if (this.props.formType === "signup") {
  //     return (
  //       <span>Already a member? {this.props.navLink}</span>
  //     )
  //   } else {
  //     return (
  //       <span>New to Wizardables? {this.props.navLink}</span>
  //     )
  //   }
  // }

  render() {
    return (
      <div className="session-login-form">
        <img id='signup-bg' src={window.images.signup_bg} />
        <form className="session-login-form-box">
          <div className="empty-div"></div>
          <div className="session-login-form-content">
            <span> Welcome Wizards!</span>
            <div className="session-login">
              <br/>
              <label>
                <input placeholder=" Username" className="login-input" type="text" value={this.state.username} onChange={this.handleInput("username")} />
              </label>
              <br/>
              <br/>
              <label>
                <input placeholder=" Email" className="login-input" type="text" value={this.state.email} onChange={this.handleInput("email")} />
              </label>
              <br/>
              <br/>
              <label>
                <input placeholder=" Password" className="login-input" type="password" value={this.state.password} onChange={this.handleInput("password")} />
              </label>
              <br/>
              <br/>
              <button className="session-submit" onClick={this.handleSubmit}>{this.props.formType}!</button>
              <br/>
              <br/>
              <button className="session-submit" onClick={this.handleDemoSubmit}>Demo Login</button>
              <br/>
              <br/>
              {this.renderAlternateMsg()}
              {/* <span>Already a member? {this.props.navLink}</span> */}
              <div className="errors"> {this.renderErrors()} </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SessionForm;