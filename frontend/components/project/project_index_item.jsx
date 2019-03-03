import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
  <div className="project-box">
    <img id='project-img' src={window.images.splash1} />
    <div className="project-info">
      <img id='project-icon' src={window.images.splash1} />
      <div className="project-content">
        <h3>{ props.project.title }</h3>
        <div className="project-follows">
          <p>76 Followers</p>
          <button>Follow</button>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectIndexItem;