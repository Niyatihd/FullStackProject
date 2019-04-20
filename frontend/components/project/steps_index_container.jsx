import React from "react";
import { connect } from "react-redux";
import StepsIndexItem from "./steps_index_item";
import EditStepContainer from "./edit_step_container";
import { deleteStep } from "../../actions/project_actions";

const mapStateToProps = (
  { entities: { projects }, session: { id } },
  { step }
) => {
  return {
    isOwner: projects[step.project_id].author_id === id,
    step
  };
};

const mapDispatchToprops = dispatch => {
  return {
    deleteStep: id => dispatch(deleteStep(id))
  };
};

class StepsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: this.props.step,
      id: this.props.step.id,
      editLink: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState(state => ({ editLink: !state.editLink }));
  }

  render() {
    if (this.state.editLink === true) {
      return (
        <EditStepContainer
          step={this.props.step}
          toggleEdit={this.toggleEdit}
        />
      );
    } else {
      return (
        <StepsIndexItem
          isOwner={this.props.isOwner}
          step={this.props.step}
          toggleEdit={this.toggleEdit}
          deleteStep={this.props.deleteStep}
        />
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(StepsIndex);
