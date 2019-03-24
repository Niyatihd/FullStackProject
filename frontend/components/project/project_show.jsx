import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ProjectShowItem from './project_show_item';
import CommentsIndexContainer from './comments_index_container';
import CommentFormContainer from './comment_form_container';
import FollowsContainer from './follows_container';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.images = [//gif
      window.images.pjpotion,
      window.images.lp2,
      window.images.ll3,
      window.images.sk1,
      window.images.w2,
      window.images.al1,
      window.images.f2,
      window.images.am2,
      window.images.vb5,
      window.images.dl2,
      window.images.ob2,
      window.images.st2,
      window.images.tr3,
      window.images.r1,
      window.images.ss1,
      window.images.hh1,
      window.images.rrd3,
      window.images.ng5,
      window.images.qq3,
      window.images.hjp3,
    ];

    this.images1 = [//icon
      window.images.splash1,
      window.images.lp1,
      window.images.ll1,
      window.images.sk1,
      window.images.w1,
      window.images.al1,
      window.images.f1,
      window.images.am1,
      window.images.vb4,
      window.images.dl2,
      window.images.ob4,
      window.images.st1,
      window.images.tr4,
      window.images.r3,
      window.images.ss6,
      window.images.hh5,
      window.images.rrd4,
      window.images.ng1,
      window.images.qq4,
      window.images.hjp7,
    ];

    this.images2 = [
      window.images.pj2,
      window.images.lp3,
      window.images.ll3,
      window.images.sk3,
      window.images.w3,
      window.images.al1,
      window.images.f3,
      window.images.am1,
      window.images.vb3,
      window.images.dl1,
      window.images.ob3,
      window.images.st3,
      window.images.tr1,
      window.images.r2,
      window.images.ss6,
      window.images.hh3,
      window.images.rrd3,
      window.images.ng1,
      window.images.qq3,
      window.images.hjp1,
    ];
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
            {/* <Link to="/" className="proj-follow-link">Follow</Link> */}
          </div>
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