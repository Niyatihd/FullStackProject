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
    // this.props.toggleEdit();
  }

  render() {
    // debugger
    return (
      <div className="comment-create-wrapper" id="goto-create-comment">
        <div className="comment-create-box">
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              {/* <img id="avatar" src={window.images.hp_navbar_logo} /> */}
              <input placeholder="Title" value={this.state.title} onChange={this.handleInput("title")}/>
              <textarea placeholder="Step" value={this.state.description} onChange={this.handleInput("description")}/>
            </div>
            <div className="form-input-bottom">
              <div className="policy-text">
                <span>
                  We have a <strong>be nice</strong> policy.
                </span>
                <span>Please be positive and constructive.</span>
              </div>
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