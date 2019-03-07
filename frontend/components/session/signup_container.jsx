import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser, demoLogin, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Signup',
    navLink: <Link to="/login">Login</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (formUser) => dispatch(createNewUser(formUser)),
    demoLogin: (user) => dispatch(demoLogin(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);