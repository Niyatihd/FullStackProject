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
        <ProjectIndexItem project={project} key={`${project.id}`} />
      )
    })

    return (
      <div>
        { project }
      </div>
    );
  }
}

export default ProjectIndex;