import React from 'react';
import { connect } from 'react-redux';
import Title from './title';
import { fetchProject, deleteProject } from '../../actions/project_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ entities: { projects, project_author, users, comments }, session, errors }, { props: {match} }) => {
  let projectId = match.params.projectId;

  return ({
    projectId: projectId,
    project: projects[projectId],
    project_author,
    session,
    users,
    loggedIn: session.id !== null,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    updateProjectButton: (
      <button id="uptdel" onClick={() => dispatch(openModal("updateProject"))}>
        Update
      </button>
    )
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);






