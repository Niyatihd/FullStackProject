import React from 'react';
import { withRouter } from "react-router-dom";

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.project;

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleUrlInput = this.handleUrlInput.bind(this);
    this.appendProject = this.appendProject.bind(this);

  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  appendProject() {
    const { title, description, photos } = this.state;
    const formDataProject = new FormData();
    formDataProject.append("project[title]", title);
    formDataProject.append("project[description]", description);
    for (let i = 0; i < photos.length; i++) {
      formDataProject.append('project[photos][]', photos[i]);
    }
    // if (this.state.image) {
    //   formDataProject.append("project[photos]", [this.state.image]);
    // }
    return formDataProject;
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = this.appendProject();
    // // debugger

    // formData.append("project[title]", this.state.title);
    // formData.append("project[description]", this.state.description);
    // formData.append("project[photos]", [this.state.image]);
    
    if (this.props.formType === "Create Project") {
      if (this.props.currentUserId) {
        // debugger
        this.props
          .createProject(this.state)
          // .createProject(formData)
          .then(() =>
            this.props.history.push(`/projects/${this.props.projectId}`)
          )
          .then(() => this.props.closeModal());
        this.state = {
          title: "",
          description: ""
        };
      } else {
        this.props.closeModal();
        this.props.history.push("/login");
      }
    } else if (this.props.formType === "Update Project") {
      this.props.updateProject(this.state).then(this.props.closeModal());
    }
  }

  // handleUrlInput(e) {
  //   const reader = new FileReader();
  //   const file = e.currentTarget.files[0];
  //   // console.log(file);
  //   reader.onloadend = () => {
  //     this.setState({ imageUrl: reader.result, image: file });
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}: `}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }

  render() {
    return (
      <>
        {/* // <div className="modal-wrapper"> */}
        <div className="modal-head">
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
          <img id="modal-bg-img" src={window.images.hwe} />
        </div>
        <div className="modal-body">
          {/* <h1>This is modal</h1> */}
          {this.props.formType === "Create Project" ? (
            <h1>Create Your Own Wizardable</h1>
          ) : (
            <h1>Update Your Wizardable</h1>
          )}
          <form onSubmit={this.handleSubmit}>
            <input
              className="modal-input1"
              type="text"
              placeholder="Title(required)"
              value={this.state.title}
              onChange={this.handleInput("title")}
            />
            <textarea
              className="textarea"
              id=""
              cols="30"
              rows="10"
              placeholder="Description(required)"
              value={this.state.description}
              onChange={this.handleInput("description")}
            />
            <input
              className="modal-input1"
              type="file"
              placeholder="Display Picture"
              onChange={e => this.setState({ photos: e.target.files })}
              multiple
              // onChange={this.handleUrlInput}
            />
            <input
              value={this.props.formType}
              className="modal-input2"
              type="submit"
            />
            {/* <div className="errors"> {this.renderErrors(this.props.errors)} </div> */}
          </form>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default withRouter(ProjectForm);