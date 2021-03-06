import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import NewProjectContainer from "../project/new_project_container";
import UpdateProjectContainer from "../project/edit_project_container";

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "newProject":
      component = <NewProjectContainer closeModal={closeModal} />;
      break;
    case "updateProject":
      component = <UpdateProjectContainer closeModal={closeModal} />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
