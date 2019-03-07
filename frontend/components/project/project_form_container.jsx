import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
// import ProjectForm from './project_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapDispatchToProps = (dispatch) => {
  return ({
    closeModal: () => dispatch(closeModal())
  });
};


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is modal</h1>
        <div onClick={this.props.closeModal} className="close-x">X</div>
      </div>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ProjectForm));