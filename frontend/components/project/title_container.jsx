import { connect } from 'react-redux';
import Title from './title';
import { fetchProject, deleteProject } from '../../actions/project_actions';

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
    deleteProject: (id) => dispatch(deleteProject(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);






