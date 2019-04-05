// import React from 'react';
import FollowsContainer from './follows_container';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
  <li>
    <div className="project-box">
      <div className="clickable-img" onClick={() => props.projectOnClick(`/projects/${props.project.id}`)}>
        <img id='project-img' src={props.project.photos[0]} />
      </div>
      {/* <Link className="project-show" to={`/projects/${props.project.id}`}><img id='project-img' src={props.project.photos[0]} /></Link> */}
      <div className="project-info">
          <img id='project-icon' src={props.project.photos[0]} />
        <div className="project-content">
          {/* <h4>{ props.project.title }</h4> */}
          <Link id="clickable-title" to={`/projects/${props.project.id}`}>{ props.project.title }</Link>
            <FollowsContainer project={props.project} />
        </div>
      </div>
    </div>
  </li>
)

export default ProjectIndexItem; 