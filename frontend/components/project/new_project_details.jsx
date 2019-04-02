import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class NewProjectDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      project_id: 
    };

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
      desc
    });
  }

  render() {
    return(
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
    );
  }
}



export default NewProjectDetails;