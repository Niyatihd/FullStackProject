import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (formUser) => dispatch(createNewUser(formUser))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);