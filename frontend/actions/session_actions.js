import * as SessionAPIUtil from '../api_util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

//regular action creators
const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


//thunk action creators
export const createNewUser = (formUser) => (dispatch) => (
  SessionAPIUtil.postUser(formUser).then(
    (user) => (
    dispatch(receiveCurrentUser(user))
  ), (err) => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = (formUser) => (dispatch) => (
  SessionAPIUtil.postSession(formUser).then(
    (user) => (
      dispatch(receiveCurrentUser(user))
  ), (err) => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => (dispatch) => (
  SessionAPIUtil.deleteSession().then(() => dispatch(logoutCurrentUser()))
);