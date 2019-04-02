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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  render() {
    return (
      <>
      {/* // <div className="modal-wrapper"> */}
        <div className="modal-head">
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <img id='modal-bg-img' src={window.images.hwe} />
        </div>
        <div className="modal-body">
          {/* <h1>This is modal</h1> */}
          <h1>Create Your Own Wizardable</h1>
          <form action="">
            <input className="modal-input1" type="text" placeholder="Title" />
            <textarea className="textarea" id="" cols="30" rows="10" placeholder="Description"></textarea>
            <input value="Create" className="modal-input2" type="submit" />
          </form>
        </div>
      {/* </div> */}
      </>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ProjectForm));