import * as ProjectAPIUtil from '../api_util/project_api_util/project_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";




//regular action creators

const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});


//Thunk action creators

export const fetchProjects = () => (dispatch) => (
  ProjectAPIUtil.fetchProjects().then((projects) => dispatch(receiveAllProjects(projects)))
);