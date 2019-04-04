//make a separate reducer for steps

import merge from 'lodash/merge';

import { RECEIVE_PROJECT, REMOVE_STEP, RECEIVE_STEP } from '../actions/project_actions';

const StepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PROJECT:
      newState = merge({}, action.steps);
      return newState;
    case RECEIVE_STEP:
      const { step } = action;
      const newStep = { [step.id]: step};
      return merge({}, state, newStep);
    case REMOVE_STEP:
      const { id } = action;
      newState = merge({}, state);
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default StepsReducer;