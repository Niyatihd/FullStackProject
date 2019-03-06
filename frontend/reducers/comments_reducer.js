//make a separate reducer for comments

import merge from 'lodash/merge';

import {
  RECEIVE_PROJECT, RECEIVE_COMMENT, REMOVE_COMMENT
} from '../actions/project_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PROJECT:
      newState = merge({}, action.comments);
      return newState;
    case RECEIVE_COMMENT:
      const { comment } = action;
      const newComment = { [comment.id]: comment};
      return merge({}, state, newComment);
    case REMOVE_COMMENT:
      const { id } = action;
      newState = merge( {}, state);
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;