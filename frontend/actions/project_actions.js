import * as ProjectAPIUtil from '../api_util/project_util';
import * as CommentAPIUtil from '../api_util/comment_api_util';
import * as FollowAPIUtil from '../api_util/follow_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

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

export const createFollow = follow => dispatch => (
  FollowAPIUtil.createFollow(follow).then(payload => dispatch(receiveFollow(payload)))
);

export const deleteFollow = follow => dispatch => (
  FollowAPIUtil.deleteFollow(follow).then((follow) => dispatch(removeFollow(follow)))
  );
  
export const createProject = project => dispatch => (
  ProjectAPIUtil.createProject(project).then(payload => dispatch(receiveProject(payload)))
);