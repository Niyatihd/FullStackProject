import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.step;
  }

  render() {
    return (
      <div className="comment-create-wrapper" id="goto-create-comment">
        <div className="comment-create-box">
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <img id='avatar' src={window.images.hp_navbar_logo} />
              <textarea placeholder="Comment" value={this.state.body} onChange={this.handleInput("body")}></textarea>
            </div>
            <div className="form-input-bottom">
              <div className="policy-text">
                <span>We have a <strong>be nice</strong> policy.</span>
                <span>Please be positive and constructive.</span>
              </div>
              <input type="submit" value={this.props.formType} />
            </div>
            {/* <Link to="/">Add Images</Link> */}
          </form>
        </div>
      </div>
    )
  }

}

export default StepForm;