import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.step;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (
      (e) => {
        this.setState({
          [type]: e.target.value
        });
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.setState({
      title: "",
      description: ""
    });
    if (this.props.formType === "Update Step") {
      this.props.toggleEdit();
    }
  }

  render() {
    // debugger
    return (
      <div className="step-create-wrapper">
        <div className="step-create-box">
          <form onSubmit={this.handleSubmit}>
            <div className="step-form-input">
              {/* <img id="avatar" src={window.images.hp_navbar_logo} /> */}
              <input placeholder="Title" value={this.state.title} onChange={this.handleInput("title")}/>
              <textarea placeholder="Step" value={this.state.description} onChange={this.handleInput("description")}/>
            </div>
            <div className="step-form-input-bottom">
              <input type="submit" value={this.props.formType} />
            </div>
            {/* <Link to="/">Add Images</Link> */}
          </form>
        </div>
      </div>
    );
  }

}

export default StepForm;