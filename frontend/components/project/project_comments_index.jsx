import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCommentsIndex = props => (
    <div className="proj-comment-body-part2">
      <div className="proj-comment-content">
        <p>{props.comment.body}</p>
        <span>By: {props.comment.author_username}</span>
      </div>
    </div>
);

export default ProjectCommentsIndex;