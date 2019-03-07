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
        <h1>This is modal</h1>
        <div onClick={this.props.closeModal} className="close-x">X</div>
      </div>
    )
  }
}



export default ProjectForm;