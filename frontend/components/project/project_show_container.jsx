import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject, deleteProject } from '../../actions/project_actions';

const mapStateToProps = ({ entities: { projects, project_author, users, steps, comments }, session, errors }, { match }) => {
  let projectId = match.params.projectId;
  // debugger

  return ({
    projectId: projectId,
    project: projects[projectId],
    steps: Object.values(steps),
    project_author,
    comments: Object.values(comments),
    session,
    users,
    loggedIn: session.id !== null,
    // isOwner: projects[projectId].author_id === session.id
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);






