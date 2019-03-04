//make a separate reducer for steps

import merge from 'lodash/merge';

import {
  RECEIVE_PROJECT
} from '../actions/project_actions';

const StepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PROJECT:
      newState = merge({}, state, action.steps);
      return newState;
    default:
      return state;
  }
};

export default StepsReducer;