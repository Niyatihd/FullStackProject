import React from 'react';
import { Link } from 'react-router-dom';

export default ({isOwner, step, toggleEdit}) => {
  // debugger
  return (
    <div className="proj-step-body">
      <div className="proj-step-content">
        <h3>{step.title}</h3>
        <span>{step.description}</span>
      </div>
      {isOwner ?
        <div>
          <button className="comment-update-link" onClick={toggleEdit}>Update</button>
          <button className="comment-update-link">Delete</button>
        </div>
        :
        "" }
    </div>
  );
}


