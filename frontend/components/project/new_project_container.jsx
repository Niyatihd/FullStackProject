import { connect } from "react-redux";
import ProjectForm from './project_form';
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { createProject } from "../../actions/project_actions";

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createProject: project => dispatch(createProject(project))
  };
};

const mapStateToProps = state => {
  return {
    project: {
      title: "",
      description: ""
    },
    projectId: state.entities.newProject.id,
    currentUserId: state.session.id,
    formType: 'Create Project'
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));