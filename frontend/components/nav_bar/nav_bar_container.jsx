import { connect } from "react-redux";
import React from "react";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  newProjectButton: (
    <button id="new-proj-btn" onClick={() => dispatch(openModal("newProject"))}>
      Create a Wizardable
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
