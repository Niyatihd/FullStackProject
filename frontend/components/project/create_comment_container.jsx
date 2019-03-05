import { connect } from 'react-redux';
import ProjectCommentForm from './project_comment_form';
import { createComment } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, { match }) => {
  // debugger
  let projectId = match.params.projectId;
  // let author_id = state.entities.users[state.session.id];

  return ({
    comment: { body: "",
               project_id: projectId
                },
    formType: 'Create Comment'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    action: (comment) => dispatch(createComment(comment))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectCommentForm));