import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = ({ entities: { projects, author, users, steps }, session, errors }, { match }) => {
  let projectId = match.params.projectId;

  return ({
    projectId: projectId,
    project: projects[projectId],
    steps: Object.values(steps),
    author,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);






