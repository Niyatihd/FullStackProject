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

  render() {
    return (
      <div className="session-login-form">
        <form onSubmit={this.handleSubmit} className="session-login-form-box">
          Wizards Sign In!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}

          <div className="session-login">
            <br/>
            <label>Username
              <input className="login-input" type="text" value={this.state.username} onChange={this.handleInput("username")} />
            </label>
            <br/>
            <label>Email
              <input className="login-input" type="text" value={this.state.email} onChange={this.handleInput("email")} />
            </label>
            <br/>
            <label>Password
              <input className="login-input" type="password" value={this.state.password} onChange={this.handleInput("password")} />
            </label>
            <br/>
            <button className="session-submit" onClick={this.handleSubmit}>{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
};

export default SessionForm;