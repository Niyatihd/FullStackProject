//make a separate reducer for author
import { getProjectByCategory } from './selectors';
import merge from 'lodash/merge';

import {
  RECEIVE_PROJECTS
} from '../actions/project_actions';

const CharmsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PROJECTS:
      let selected = getProjectByCategory({entities}, "Charm");
      newState = merge({}, state, {charms: selected});
      return newState;
    default:
      return state;
  }
};

export default CharmsReducer;