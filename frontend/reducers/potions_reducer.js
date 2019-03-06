//make a separate reducer for author
import { getProjectByCategory } from './selectors';
import merge from 'lodash/merge';

import {
  RECEIVE_PROJECTS
} from '../actions/project_actions';

const PotionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PROJECTS:
      let selected = getProjectByCategory({entities}, "Potion");
      newState = merge({}, state, {potions: selected});
      return newState;
    default:
      return state;
  }
};

export default PotionsReducer;