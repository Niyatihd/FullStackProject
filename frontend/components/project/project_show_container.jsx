import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = ({ entities: { projects, project_author, users, steps, comments }, session, errors }, { match }) => {
  let projectId = match.params.projectId;
  // let commentId = match.params.commentId;

  return ({
    projectId: projectId,
    project: projects[projectId],
    steps: Object.values(steps),
    project_author,
    comments: Object.values(comments),
    session,
    users
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);






