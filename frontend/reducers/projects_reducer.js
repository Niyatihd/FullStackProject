import merge from 'lodash/merge';

import { RECEIVE_ALL_PROJECTS, 
         RECEIVE_PROJECT,
         RECEIVE_COMMENT, 
         RECEIVE_FOLLOW,
         REMOVE_FOLLOW} from '../actions/project_actions';

const ProjectsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState = merge({}, state, { [action.project.id] : action.project});
      return newState;
    case RECEIVE_COMMENT:
      const { comment } = action;
      newState = merge({}, state, comment);
      return newState;
    case RECEIVE_FOLLOW:
    // debugger
      let { follow } = action;
      newState = merge({}, state);
      newState[follow.project_id].proj_follows += 1; 
      return newState;
    case REMOVE_FOLLOW:
    // debugger
      let { project_id, id } = action.deletedFollow;
      newState = merge({}, state);
      newState[project_id].proj_follows -= 1;
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;