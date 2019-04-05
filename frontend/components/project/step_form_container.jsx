import { connect } from 'react-redux';
import StepForm from './step_form';
import { createStep } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, { match }) => {
  let projectId = match.params.projectId;
  // let author_id = state.entities.users[state.session.id];

  return ({
    step: {
      title: "",
      description: "",
      project_id: projectId
    },
    formType: 'Add Step'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    action: (step) => dispatch(createStep(step))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StepForm));