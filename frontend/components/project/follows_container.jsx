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
    // getFollowId: (follows, user_id, project_id) => dispatch(getFollowId(follows, user_id, project_id))
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
  //   this.props.fetchProject(this.props.project_id);
  // }

  toggleFollow() {
    const newState = !this.state.editFollow;
    
    // this.props.fetchProject(this.props.project_id).then(() => {
      if (!this.state.editFollow) {
        // console.log("yay!");
        this.props.fetchProject(this.props.project_id)
          .then(() => this.props.createFollow(this.state))
          // .then(() => this.props.fetchProject(this.props.project_id))
          .then(this.setState({ editFollow: newState }));
        // console.log(this.state.editFollow);
      } else {
        this.props.fetchProject(this.props.project_id)
          .then((res) => {
            // debugger
            let followId = Object.values(res.follows)[0].id;
            // debugger
            this.props.deleteFollow(followId);
          })
          // .then(() => this.props.fetchProject(this.props.project_id))
          .then(this.setState({ editFollow: newState }));
        // console.log("deleted this follow");
      } 
    // }); 
  }

  render() {
    if (this.props.project_id === undefined) {
      return null;
    }
    const buttonText = () => {
      if (this.state.editFollow) {
        return 'Unfollow';
      } else {
        return 'Follow';
      }
    }

    return (
      <div className="project-follows">
        <p>{this.props.project.proj_follows} Followers</p>
        {this.props.loggedIn ? <button onClick={this.toggleFollow} className="project-follow-link">{buttonText()}</button>
          :
          <Link to="/login" className="project-follow-link">{buttonText()}</Link>
        }
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(FollowsContainer));