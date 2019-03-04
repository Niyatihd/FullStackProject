import merge from 'lodash/merge';

import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';

const ProjectsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState = merge({}, { [action.project.id] : action.project});
      return newState;
      // return action.project;
    default:
      return state;
  }
};

export default ProjectsReducer;