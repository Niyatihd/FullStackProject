import * as ProjectAPIUtil from '../api_util/project_util';
import * as CommentAPIUtil from '../api_util/comment_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

//regular action creators

export const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = ({ project, project_author, steps, comments }) => ({
  type: RECEIVE_PROJECT,
  project,
  project_author,
  steps,
  comments
});

export const receiveComment = ({ comment}) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  id
});

//Thunk action creators

export const fetchProjects = () => (dispatch) => (
  ProjectAPIUtil.fetchProjects().then((projects) => dispatch(receiveAllProjects(projects)))
);

export const fetchProject = (id) => (dispatch) => (
  ProjectAPIUtil.fetchProject(id).then((payload) => dispatch(receiveProject(payload)))
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment).then(payload => dispatch(receiveComment(payload)))
);

export const updateComment = comment => dispatch => (
  CommentAPIUtil.updateComment(comment).then(payload => dispatch(receiveComment(payload)))
);

export const deleteComment = id => dispatch => (
  CommentAPIUtil.deleteComment(id).then(() => dispatch(removeComment(id)))
);