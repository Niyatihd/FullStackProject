// import React from 'react';
// import { Link } from 'react-router-dom';
import FollowsContainer from './follows_container';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
  <li>
  <div className="project-box">
    <Link className="project-show" to={`/projects/${props.project.id}`}><img id='project-img' src={props.project.photo} /></Link>
    <div className="project-info">
      <img id='project-icon' src={props.image} />
      <div className="project-content">
        <h4>{ props.project.title }</h4>
        {/* <div className="project-follows"> */}
          {/* <p>{props.project.proj_follows} Followers</p> */}
            <FollowsContainer project={props.project} />
          {/* <Link to="/" className="project-follow-link">Follow</Link> */}
        {/* </div> */}
      </div>
    </div>
  </div>
  </li>
)

export default ProjectIndexItem; 