import merge from 'lodash/merge';

import { RECEIVE_ALL_PROJECTS, 
         RECEIVE_PROJECT,
         RECEIVE_COMMENT } from '../actions/project_actions';

const ProjectsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState = merge({}, state, { [action.project.id] : action.project});
      return newState;
    case RECEIVE_COMMENT:
      const { comment, comment_author } = action;
      newState = merge({}, state);
      newState[comment.project_id].commentIds.push(comment.id);
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;