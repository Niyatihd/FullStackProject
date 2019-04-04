import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import StepsIndexContainer from './steps_index_container';
import StepFormContainer from './step_form_container';
import CommentsIndexContainer from './comments_index_container';
import CommentFormContainer from './comment_form_container';
import TitleContainer from './title_container';


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addStep: 0
    };

    this.handleAddStep = this.handleAddStep.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  handleAddStep(e) {
    e.preventDefault();
    // this.state.addStep === 0 ?
    this.setState( state => ({ addStep: !state.addStep }));
    // :
    // this.setState( state => ({ addStep: !!state.addStep }))
  }

  render() {
  
    //////////IMPORTANT/////////
    ///render runs before componentDidMount(), so while it waits for component 
    //to mount and fetch data, meanwhile we return null so that the app does not break
    if (this.props.project === undefined) {
      return null;
    }
    //////////IMPORTANT/////////

    const step = this.props.steps.map(step => <StepsIndexContainer step={step} key={step.id}/>);
    
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
        {this.state.addStep === true ? <StepFormContainer /> : ""}
        {this.props.project.author_id === this.props.session.id ? <div className="add-step-div"><button id="add-step" onClick={this.handleAddStep}>Add Steps</button></div> : ""}
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