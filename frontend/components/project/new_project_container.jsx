import { connect } from "react-redux";
import ProjectForm from "./project_form";
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
    errors: state.errors.project,
    project: {
      title: "",
      description: "",
      photos: []
      // imageUrl: "",
      // image: ""
    },
    projectId: state.entities.newProject.id,
    currentUserId: state.session.id,
    formType: "Create Project",
    loading: false
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectForm)
);
