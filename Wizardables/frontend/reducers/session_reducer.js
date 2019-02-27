import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullSession = {
  currentUser: null
};

export default (oldstate = _nullSession, action) => {
  Object.freeze(oldstate);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return oldstate;
  }
};

