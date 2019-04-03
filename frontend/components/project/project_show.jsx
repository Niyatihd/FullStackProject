import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import StepsIndexItem from './steps_index_item';
import CommentsIndexContainer from './comments_index_container';
import CommentFormContainer from './comment_form_container';
import FollowsContainer from './follows_container';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleDoNotDelete = this.handleDoNotDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  handleCheck(e) {
    e.preventDefault();
    this.setState(state => ({ checked: !state.checked }));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteProject(this.props.projectId);
    this.props.history.push("/index");
    this.setState(state => ({ checked: !state.checked }));
  }

  handleDoNotDelete(e) {
    e.preventDefault();
    this.setState(state => ({ checked: !state.checked }));
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

    const updateDeleteButton = (
      <div className="project-update">
        <button id="uptdel">Update</button>
        <button id="uptdel" onClick={this.handleCheck}>Delete</button>
      </div>
    );

    const checkDelete = (
      <div className="check-delete">
        <span>Are you sure, you want to delete project permanently?</span>
        <div>
          <button id="delete-y" onClick={this.handleDelete}>Yes</button>
          <button id="delete-n" onClick={this.handleDoNotDelete}>No</button>
        </div>
      </div>
    );

    return (
      <div className="proj-wrapper">
        <img id="project-show-bg" src={this.props.project.photos[1]} />
        <div className="proj-title">
          {/* <img id='proj-icon' src={this.images1[this.props.project.id - 1]} /> */}
          <img id="proj-icon" src={this.props.project.photos[0]} />
          <h3>{this.props.project.title}</h3>
          <div className="proj-title-details">
            <span>{this.props.project_author.username}</span>
            {/* <span>|</span> */}
            {/* <span>{this.props.project.proj_follows}  Followers</span> */}
            {/* <span>Followers 29</span> */}
            {/* </div>
          <div className="proj-link"> */}
            <FollowsContainer
              className="proj-follow-link"
              project={this.props.project}
            />
            {this.props.session.id === this.props.project.author_id ? updateDeleteButton : ""}
            {/* {this.props.session.id === this.props.project.author_id ? <div className="project-update"><button id="uptdel">Update</button><button id="uptdel">Delete</button></div> : ""} */}
            {/* <Link to="/" className="proj-follow-link">Follow</Link> */}
          </div>
          {this.state.checked === true ? checkDelete : ""}
        </div>
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