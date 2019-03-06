import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ProjectShowItem from './project_show_item';
import CommentsIndexContainer from './comments_index_container';
import CreateCommentContainer from './create_comment_container';

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

    const step = this.props.steps.map(step => <ProjectShowItem step={step} key={step.id}/>);
    
    const comment = this.props.comments.map(comment => <CommentsIndexContainer comment={comment} key={comment.id} />)

    return (
      <div className="proj-wrapper">
        <img id='project-show-bg' src={window.images.pjpotion} />
        <div className="proj-title">
          <img id='proj-icon' src={window.images.splash1} />
          <h3 >{this.props.project.title}</h3>
          <div className="proj-title-details">
            <span>{this.props.project_author.username}</span>
            <span>|</span>
            <span>Followers 29</span>
          </div>
          <div className="proj-link">
            <Link to="/" className="proj-follow-link">Follow</Link>
          </div>
        </div>
        <div className="proj-body">
          <span>{this.props.project.description}</span>
          <img id='proj-body-main-img' src={window.images.splash1} />
        </div>
        {step}
        <div className="proj-comment-body"><h3>Discussions</h3>
          <HashLink to={`${this.props.location.pathname}#goto-create-comment`} className="proj-comment-link">Comment</HashLink>
        </div>
        <div className="to-reverse-comments">
          <div className="test">
          {comment}
          </div>
        </div>
        {this.props.loggedIn ? <CreateCommentContainer /> : ""}
      </div>
    );
  }
}

export default withRouter(ProjectShow);