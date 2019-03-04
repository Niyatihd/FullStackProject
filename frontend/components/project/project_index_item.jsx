import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
  <div className="project-box">
    <Link className="project-show" to={`/projects/${props.project.id}`}><img id='project-img' src={props.image} /></Link>
    <div className="project-info">
      <img id='project-icon' src={props.image} />
      <div className="project-content">
        <h4>{ props.project.title }</h4>
        <div className="project-follows">
          <p>76 Followers</p>
          <Link to="/" className="project-follow-link">Follow</Link>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectIndexItem; 