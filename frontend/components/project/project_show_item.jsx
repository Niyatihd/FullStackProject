import React from 'react';
import { Link } from 'react-router-dom';

const ProjectShowItem = props => (
  <div className="proj-step-content">
    <h3>{props.step.title}</h3>
    <span>{props.step.description}</span>
  </div>
);

export default ProjectShowItem;
