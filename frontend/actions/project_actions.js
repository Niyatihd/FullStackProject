import * as ProjectAPIUtil from '../api_util/project_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";


//regular action creators

export const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});


//Thunk action creators

export const fetchProjects = () => (dispatch) => (
  ProjectAPIUtil.fetchProjects().then((projects) => dispatch(receiveAllProjects(projects)))
);

export const fetchProject = (id) => (dispatch) => (
  ProjectAPIUtil.fetchProject(id).then((payload) => dispatch(receiveProject(payload)))
);