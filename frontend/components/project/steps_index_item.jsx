import React from 'react';
import { Link } from 'react-router-dom';

const StepsIndexItem = props => (
  <div className="proj-step-body">
    <div className="proj-step-content">
      <h3>{props.step.title}</h3>
      <span>{props.step.description}</span>
    </div>
  </div>
);

export default StepsIndexItem;
