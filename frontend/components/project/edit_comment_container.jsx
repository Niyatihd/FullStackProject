import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { updateComment } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({entities: { comments }}, { match, comment, toggleEdit}) => {
  // debugger
  let projectId = match.params.projectId;

  return ({
    comment: {
      id: comment.id,
      body: comment.body,
      project_id: projectId
    },
    formType: 'Update Comment',
    toggleEdit
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    action: (comment) => dispatch(updateComment(comment))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));