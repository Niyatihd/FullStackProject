//make a separate reducer for comments

import merge from 'lodash/merge';

import {
  RECEIVE_PROJECT, RECEIVE_COMMENT
} from '../actions/project_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_PROJECT:
      newState = merge({}, state, action.comments);
      return newState;
    case RECEIVE_COMMENT:
    // debugger
      const { comment, comment_author } = action;
      const newComment = { [comment.id]: comment};
      return merge({}, state, newComment);
    default:
      return state;
  }
};

export default CommentsReducer;