import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
  <button>
  <div className="project-box">
    <img id='project-img' src={props.image} />
    <div className="project-info">
      <img id='project-icon' src={props.image} />
      <div className="project-content">
        <h4>{ props.project.title }</h4>
        <div className="project-follows">
          <p>76 Followers</p>
          <button>Follow</button>
        </div>
      </div>
    </div>
  </div>
  </button>
)

export default ProjectIndexItem; 