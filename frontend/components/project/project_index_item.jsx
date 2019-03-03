import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
  <div>
    <h3>{ props.project.title }</h3>
    <p>{ props.project.description }</p>
  </div>
)

export default ProjectIndexItem;