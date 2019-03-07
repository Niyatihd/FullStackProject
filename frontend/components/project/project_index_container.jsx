import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = (state) => {
  let projects = Object.values(state.entities.projects);
  let followsCount = Object.values(state.entities.follows)
  return ({
    projects: projects,
    followsCount: followsCount
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchProjects: () => dispatch(fetchProjects())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);