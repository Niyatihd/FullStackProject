import { connect } from "react-redux";
import StepForm from "./step_form";
import { createStep } from "../../actions/project_actions";
import { withRouter } from "react-router-dom";
import { updateStep } from "../../actions/project_actions";

const mapStateToProps = (
  { entities: { steps } },
  { match, step, toggleEdit }
) => {
  // debugger
  let projectId = match.params.projectId;

  return {
    step: {
      id: step.id,
      title: step.title,
      description: step.description,
      project_id: projectId,
      photoFile: "",
      photoUrl: ""
    },
    formType: "Update Step",
    toggleEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: step => dispatch(updateStep(step))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StepForm)
);
