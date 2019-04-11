import { connect } from "react-redux";
import ProjectForm from "./project_form";
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";
import { updateProject } from "../../actions/project_actions";

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateProject: project => dispatch(updateProject(project))
  };
};

const mapStateToProps = (
  { entities: { newProject, projects }, session },
  { match, comment, toggleEdit }
) => {
  return {
    project: {
      id: newProject.id,
      title: projects[newProject.id].title,
      description: projects[newProject.id].description,
      photos: []
    },
    projectId: newProject.id,
    currentUserId: session.id,
    formType: "Update Project"
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProjectForm)
);
