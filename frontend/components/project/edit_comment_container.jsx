import { connect } from 'react-redux';
import ProjectCommentForm from './project_comment_form';
import { updateComment } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({entities: {comments, }}, { match }) => {
  // debugger
  let projectId = match.params.projectId;
  let commentId = match.params.commentId;
  // let author_id = state.entities.users[state.session.id];

  return ({
    comment: {
      body: comments[commentId].body,
      project_id: projectId
    },
    formType: 'Update Comment'
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    action: (comment) => dispatch(updateComment(comment))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectCommentForm));