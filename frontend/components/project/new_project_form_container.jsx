import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
// import ProjectForm from './project_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createProject } from '../../actions/project_actions';

const mapDispatchToProps = (dispatch) => {
  return ({
    closeModal: () => dispatch(closeModal()),
    createProject: (project) => dispatch(createProject(project))
  });
};


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (
      (e) => {
        this.setState({
          [type]: e.target.value
        });
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.createProject(this.state);
    this.state = {
      title: '',
      description: ''
    };
    this.props.closeModal()
    .then(this.props.history.push("/projectdetails"));
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
          <form onSubmit={this.handleSubmit}>
            <input className="modal-input1" type="text" placeholder="Title" value={this.state.title} onChange={this.handleInput("title")}/>
            <textarea className="textarea" id="" cols="30" rows="10" placeholder="Description" value={this.state.description} onChange={this.handleInput("description")}></textarea>
            <input value="Create" className="modal-input2" type="submit" />
          </form>
        </div>
      {/* </div> */}
      </>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ProjectForm));