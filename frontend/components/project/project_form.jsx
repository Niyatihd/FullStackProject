import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <img id='modal-bg' src={window.images.logo_hp} />
        <h1>Create Your Own Wizardable</h1>
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <form action="">
          <input type="button" value=""/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
      </div>
    )
  }
}



export default ProjectForm;