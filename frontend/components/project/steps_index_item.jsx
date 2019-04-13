import React from "react";
import { Link } from "react-router-dom";

export default ({ isOwner, step, toggleEdit, deleteStep }) => {
  // debugger
  return (
    <div className="proj-step-body">
      <div className="proj-step-content">
        <h3>Step: {step.title}</h3>
        <span>{step.description}</span>
        {step.photo ? <img src={`${step.photo}`} alt="step-photo" /> : ""}
      </div>
      {isOwner ? (
        <div>
          <button className="comment-update-link" onClick={toggleEdit}>
            Update
          </button>
          <button
            className="comment-update-link"
            onClick={() => deleteStep(step.id)}
          >
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
