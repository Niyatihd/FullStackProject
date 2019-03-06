import React from 'react';

export default ({comment, isOwner, toggleEdit, deleteComment}) =>  {
  // debugger
  return (
    <div className="proj-comment-body-part2">
      <div className="proj-comment-content">
        <p>{comment.body}</p>
        <div className="comment-author-edit">
          <span>By: {comment.author_username}</span>
          {isOwner ? 
              <div>
                <button onClick={toggleEdit} className="comment-update-link">Update</button>
                <button onClick={() => deleteComment(comment.id)} className="comment-update-link">Delete</button>
              </div>
            :
            ""}
        </div>
      </div>
    </div>
  );
}