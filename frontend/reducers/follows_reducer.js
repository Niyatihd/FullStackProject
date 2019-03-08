import merge from 'lodash/merge';

import {
  RECEIVE_PROJECT, RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_ALL_PROJECTS
} from '../actions/project_actions';

const FollowsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PROJECT:
      newState = merge({}, action.follows);
      return newState;
    case RECEIVE_FOLLOW:
      const { follow } = action;
      const newFollow = { [follow.id]: follow};
      return merge({}, state, newFollow);
    case REMOVE_FOLLOW:
      const { project_id, id } = action;
      newState = merge( {}, state);
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default FollowsReducer;