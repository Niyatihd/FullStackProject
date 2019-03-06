import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = ({ session:{id}}, {comment: {author_id}}) => {
  debugger

  return ({
    isOwner: author_id === id
  });
};


const ProjectCommentsIndex = props => (
  <div className="proj-comment-body-part2">
    <div className="proj-comment-content">
      <p>{props.comment.body}</p>
      <div className="comment-author-edit">
        <span>By: {props.comment.author_username}</span>
        { props.isOwner ? <Link to="" className="comment-update-link">Update</Link>
        :
        ""}
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps)(ProjectCommentsIndex);