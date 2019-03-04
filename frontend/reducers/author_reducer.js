//make a separate reducer for author

import merge from 'lodash/merge';

import {
  RECEIVE_PROJECT
} from '../actions/project_actions';

const AuthorReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PROJECT:
      newState = merge({}, state, {
        [action.author.id]: action.author
      });
      return newState;
    default:
      return state;
  }
};

export default AuthorReducer;