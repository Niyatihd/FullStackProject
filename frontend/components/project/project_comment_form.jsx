import React from 'react';
import { Link } from 'react-router-dom';

class ProjectCommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state =  this.props.comment;
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
      body: ""
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="comment-create-wrapper" id="goto-create-comment">
        <div className="comment-create-box">
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.body} onChange={this.handleInput("body")} />
            <input type="submit" value="Post" />
            {/* <Link to="/">Add Images</Link> */}
          </form>
        </div>
      </div>
    );
  }
}

export default ProjectCommentForm;