import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { getProject } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  let projectId = match.params.projectId;
  let project = getProject(state, projectId);
  // console.log(Object.keys(project));
  // console.log(project instanceof Object);
  return ({
    projectId: projectId,
    // title: project.title
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);






