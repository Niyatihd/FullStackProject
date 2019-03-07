import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProject, createFollow, deleteFollow } from '../../actions/project_actions';
import { getFollowId } from '../../reducers/selectors';

const mapStateToProps = ({ session: { id }, entities }, { project }) => {
  // debugger
  return ({
    user_id: id,
    project_id: project.id,
    project: project,
    loggedIn: id !== null,
    follows: entities.follows
  });
};

const mapDispatchToprops = (dispatch) => {
  return ({
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    getFollowId: (follows, user_id, project_id) => dispatch(getFollowId(follows, user_id, project_id))
  });
};

class FollowsContainer extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      user_id: this.props.user_id,
      project_id: this.props.project_id,
      editFollow: this.props.project.follower_ids.includes(this.props.user_id),
    };

    this.toggleFollow = this.toggleFollow.bind(this);
  }

  // componentDidMount() {
  //   // debugger
  //   this.props.fetchProject(this.props.project_id);
  // }

  toggleFollow() {
    this.setState(state => ({ editFollow: !state.editFollow }));
    this.props.fetchProject(this.props.project_id).then(() => {
    if (this.state.editFollow) {
      console.log("yay!");
      this.props.createFollow(this.state);
      console.log(this.state.editFollow);
    // }
    } else {
      // let followId = getFollowId(this.props.follows, this.props.user_id, this.props.project_id);
      // debugger
      this.props.deleteFollow(this.state);
      console.log("deleted this follow");
    } 
    }); 
    }
  // }

  // handleSubmit() {
  //   
  // }

  render() {
    if (this.props.project_id === undefined) {
      return null;
    }
    // debugger
    return (
      <div className="project-follows">
        <p>{this.props.project.proj_follows} Followers</p>
        {this.props.loggedIn ? <button onClick={this.toggleFollow} className="project-follow-link">Follow</button>
          :
          <Link to="/login" className="project-follow-link">Follow</Link>
        }
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(FollowsContainer));