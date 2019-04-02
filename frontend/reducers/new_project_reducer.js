import merge from 'lodash/merge';
import { RECEIVE_PROJECT } from '../actions/project_actions';

const NewProjectReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, { id: action.project.id });
    default:
      return state;
  }
};

export default NewProjectReducer;