import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import StepsIndexItem from './steps_index_item';
import CommentsIndexContainer from './comments_index_container';
import CommentFormContainer from './comment_form_container';
import TitleContainer from './title_container';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  render() {
  
    //////////IMPORTANT/////////
    ///render runs before componentDidMount(), so while it waits for component 
    //to mount and fetch data, meanwhile we return null so that the app does not break
    if (this.props.project === undefined) {
      return null;
    }
    //////////IMPORTANT/////////

    const step = this.props.steps.map(step => <StepsIndexItem step={step} key={step.id}/>);
    
    const comment = this.props.comments.map(comment => <CommentsIndexContainer comment={comment} key={comment.id} />);

    return (
      <div className="proj-wrapper">
        <img id="project-show-bg" src={this.props.project.photos[1]} />
        <TitleContainer props={this.props}/>
        <div className="proj-body">
          <span>{this.props.project.description}</span>
          <img id="proj-body-main-img" src={this.props.project.photos[2]} />
        </div>
        {step}
        <div className="proj-comment-body">
          <h3>Discussions</h3>
          {this.props.loggedIn ? (
            <HashLink
              to={`${this.props.location.pathname}#goto-create-comment`}
              className="proj-comment-link"
            >
              Comment
            </HashLink>
          ) : (
            <HashLink to={"/login"} className="proj-comment-link">
              Comment
            </HashLink>
          )}
        </div>
        <div className="to-reverse-comments">
          <div className="test">{comment}</div>
        </div>
        {this.props.loggedIn ? <CommentFormContainer /> : ""}
      </div>
    );
  }
}

export default withRouter(ProjectShow);