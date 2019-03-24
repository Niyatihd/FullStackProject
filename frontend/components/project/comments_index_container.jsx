import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentsIndexItem from './comments_index_item';
import EditCommentContainer from './edit_comment_container';
import { deleteComment } from '../../actions/project_actions';

const mapStateToProps = ({ session:{id}}, {comment}) => {
  // debugger
  return ({
    isOwner: comment.author_id === id
  });
};

const mapDispatchToprops = (dispatch) => {
  return ({
    deleteComment: (id) => dispatch(deleteComment(id))
  });
};

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // comment: this.props.comment,
      // id: this.props.comment.id,
      editLink: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);

  }

  toggleEdit() {
    this.setState(state => ({editLink: !state.editLink}));
  }

  render() {
    if (this.state.editLink === true) {
      // this.toggleEdit
      return (
        <EditCommentContainer comment={this.props.comment} toggleEdit={this.toggleEdit}/>
        // <h1>EditCommentContainer</h1>
      )
    } else {

      return <CommentsIndexItem isOwner={this.props.isOwner} comment={this.props.comment} toggleEdit={this.toggleEdit} deleteComment={this.props.deleteComment}/>
    }
  }
}


export default connect(mapStateToProps, mapDispatchToprops)(CommentsIndex);