import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProject, createFollow, deleteFollow } from '../../actions/project_actions';
import { getFollowId } from '../../reducers/selectors';

const mapStateToProps = ({ session: { id }, follows }, { project }) => {
  // debugger
  return ({
    user_id: id,
    project_id: project.id,
    loggedIn: id !== null,
    follows: follows
  });
};

const mapDispatchToprops = (dispatch) => {
  return ({
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow)),
    fetchProject: (id) => dispatch(fetchProject(id)),
  });
};

class FollowsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.user_id,
      project_id: this.props.project_id,
      editFollow: false,
    };
    // this.followId = getFollowId(this.props.follows, this.props.user_id, this.props.project_id);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow() {
    this.setState(state => ({ editFollow: !state.editFollow }));
    this.props.fetchProject(this.props.project_id).then(() => {
    if (this.state.editFollow) {
      // console.log("yay!");
      this.props.createFollow(this.state);
      console.log(this.state.editFollow);
    }
    // } else {
    //   let followId = getFollowId(this.props.follows, this.props.user_id, this.props.project_id);
    //   debugger
    //   // this.props.deleteFollow(followId);
    // } 
    }); 
  }

  // handleSubmit() {
  //   
  // }

  render() {
    // debugger
    return (
      <div>
        {this.props.loggedIn ? <button onClick={this.toggleFollow} className="project-follow-link">Follow</button>
          :
          <Link to="/login" className="project-follow-link">Follow</Link>
        }
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(FollowsContainer));