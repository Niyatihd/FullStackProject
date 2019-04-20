import React from "react";
import { Link, withRouter } from "react-router-dom";
import FollowsContainer from "./follows_container";

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteProj: false,
      updateProj: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleDoNotDelete = this.handleDoNotDelete.bind(this);
    this.toggleProjDel = this.toggleProjDel.bind(this);
    this.toggleProjUpdate = this.toggleProjUpdate.bind(this);
  }

  toggleProjUpdate(e) {
    e.preventDefault();
    this.setState(state => ({ updateProj: !state.updateProj }));
  }

  toggleProjDel(e) {
    e.preventDefault();
    this.setState(state => ({ deleteProj: !state.deleteProj }));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteProject(this.props.projectId);
    this.props.history.push("/index");
    this.setState(state => ({ deleteProj: !state.deleteProj }));
  }

  handleDoNotDelete(e) {
    e.preventDefault();
    this.setState(state => ({ deleteProj: !state.deleteProj }));
  }

  render() {
    const updateDeleteButton = (
      <div className="project-update">
        {this.props.updateProjectButton}
        <button id="uptdel" onClick={this.toggleProjDel}>
          Delete
        </button>
      </div>
    );

    const checkDelete = (
      <div className="check-delete">
        <span>Are you sure, you want to delete project permanently?</span>
        <div>
          <button id="delete-y" onClick={this.handleDelete}>
            Yes
          </button>
          <button id="delete-n" onClick={this.handleDoNotDelete}>
            No
          </button>
        </div>
      </div>
    );

    const displayUpdateDelete =
      this.state.deleteProj === true ? checkDelete : updateDeleteButton;

    return (
      <div className="proj-title">
        <img id="proj-icon" src={this.props.project.photos[0]} />
        <h3>{this.props.project.title}</h3>
        <div className="proj-title-details">
          <span>{this.props.project_author.username}</span>
          <FollowsContainer
            className="proj-follow-link"
            project={this.props.project}
          />
          {this.props.session.id === this.props.project.author_id
            ? displayUpdateDelete
            : ""}
        </div>
      </div>
    );
  }
}

export default withRouter(Title);
