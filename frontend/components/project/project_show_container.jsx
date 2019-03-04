import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, { match }) => {
  let projectId = match.params.projectId;

  return ({
    projectId: projectId,
    project: state.project,
    steps: state.steps,
    author: state.author
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);






