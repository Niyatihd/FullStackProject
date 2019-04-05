import * as ProjectAPIUtil from '../api_util/project_util';
import * as CommentAPIUtil from '../api_util/comment_api_util';
import * as StepAPIUtil from '../api_util/step_api_util';
import * as FollowAPIUtil from '../api_util/follow_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";
export const CLEAR_PROJECT_ERRORS = 'CLEAR_PROJECT_ERRORS';
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const REMOVE_STEP = "REMOVE_STEP";
export const RECEIVE_STEP = "RECEIVE_STEP";

//regular action creators

export const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveProject = ({ project, project_author, steps, comments, follows }) => ({
  type: RECEIVE_PROJECT,
  project,
  project_author,
  steps,
  comments,
  follows
});

export const removeProject = (id) => ({
  type: REMOVE_PROJECT,
  id
});

export const receiveComment = ({ comment }) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  id
});

export const receiveFollow = ({ follow }) => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  deletedFollow: follow
});


export const receiveStep = ({ step }) => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = (id) => ({
  type: REMOVE_STEP,
  id
});

const receiveErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_PROJECT_ERRORS
});

//Thunk action creators

export const fetchProjects = (str) => (dispatch) => (
  ProjectAPIUtil.fetchProjects(str).then((projects) => dispatch(receiveAllProjects(projects)))
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

export const createStep = step => dispatch => (
  StepAPIUtil.createStep(step).then(payload => dispatch(receiveStep(payload)))
);

export const deleteStep = id => dispatch => (
  StepAPIUtil.deleteStep(id).then(() => dispatch(removeStep(id)))
);

export const updateStep = step => dispatch => (
  StepAPIUtil.updateStep(step).then(payload => dispatch(receiveStep(payload)))
);

export const createFollow = follow => dispatch => (
  FollowAPIUtil.createFollow(follow).then(payload => dispatch(receiveFollow(payload)))
);

export const deleteFollow = follow => dispatch => (
  FollowAPIUtil.deleteFollow(follow).then((follow) => dispatch(removeFollow(follow)))
  );
  
export const createProject = project => dispatch => (
  ProjectAPIUtil.createProject(project).then(payload => dispatch(receiveProject(payload)))
);
  
export const updateProject = project => dispatch => (
  ProjectAPIUtil.updateProject(project).then(payload => dispatch(receiveProject(payload)))
);

export const deleteProject = id => dispatch => (
  ProjectAPIUtil.deleteProject(id).then(() => dispatch(removeProject(id)))
);