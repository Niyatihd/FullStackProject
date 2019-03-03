import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render () {
    let project = this.props.projects.map((project) => {
      return (
        <li><ProjectIndexItem project={project} key={`${project.id}`} /></li>
      )
    })

    return (
      <div>
        <h3 className="featured-title">Featured</h3>
        <ul className="project-grid">
          {project}
        </ul>
      </div>
    );
  }
}

export default ProjectIndex;