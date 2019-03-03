import merge from 'lodash/merge';

import { RECEIVE_ALL_PROJECTS } from '../actions/project_actions';

const ProjectsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      debugger
      return action.projects;
    default:
      return state;
  }
};

export default ProjectsReducer;