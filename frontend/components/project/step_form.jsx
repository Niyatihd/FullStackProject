import React from "react";
import ReactQuill from "react-quill"; // ES6

class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.step;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  onChangeTextEditor(field) {
    return e => {
      this.setState({ [field]: e });
    };
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
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("step[title]", this.state.title);
    formData.append("step[description]", this.state.description);
    formData.append("step[project_id]", this.state.project_id);
    if (this.props.formType === "Update Step") {
      formData.append("step[id]", this.state.id);
    }

    if (this.state.photoFile) {
      formData.append("step[photo]", this.state.photoFile);
    }

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
    return (
      <div className="step-create-wrapper">
        <div className="step-create-box">
          <form onSubmit={this.handleSubmit}>
            <div className="step-form-input">
              <input
                placeholder="Title(required)"
                value={this.state.title}
                onChange={this.handleInput("title")}
              />
              <ReactQuill
                id="react-quill"
                placeholder="Description(required)"
                value={this.state.description}
                onChange={this.onChangeTextEditor("description")}
              />
            </div>
            <div className="step-form-input-bottom">
              <input
                id="step-image-input"
                type="file"
                placeholder="Step Picture"
                onChange={this.handleFile}
              />
              <input type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StepForm;
