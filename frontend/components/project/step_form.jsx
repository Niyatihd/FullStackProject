import React from "react";

class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.step;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("step[title]", this.state.title);
    formData.append("step[description]", this.state.description);
    formData.append("step[project_id]", this.state.project_id);
    // if (this.formType === "Update Step") {
    formData.append("step[id]", this.state.id);
    // }

    if (this.state.photoFile) {
      formData.append("step[photo]", this.state.photoFile);
    }

    // this.props.action(this.state);
    this.props.action(formData);
    this.setState({
      title: "",
      description: ""
    });
    if (this.props.formType === "Update Step") {
      this.props.toggleEdit();
    }
  }

  render() {
    // debugger
    return (
      <div className="step-create-wrapper">
        <div className="step-create-box">
          <form onSubmit={this.handleSubmit}>
            <div className="step-form-input">
              {/* <img id="avatar" src={window.images.hp_navbar_logo} /> */}
              <input
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleInput("title")}
              />
              <textarea
                placeholder="Step"
                value={this.state.description}
                onChange={this.handleInput("description")}
              />
            </div>
            <div className="step-form-input-bottom">
              <input
                id="step-image-input"
                type="file"
                placeholder="Step Picture"
                // onChange={e => this.setState({ photo: e.target.files[0] })}
                onChange={this.handleFile}
              />
              <input type="submit" value={this.props.formType} />
            </div>

            {/* <Link to="/">Add Images</Link> */}
          </form>
        </div>
      </div>
    );
  }
}

export default StepForm;
