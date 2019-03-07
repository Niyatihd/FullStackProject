import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

    this.images = [
                   window.images.splash1,
                   window.images.splash2,
                   window.images.splash3,
                   window.images.splash4,
                   window.images.splash5
                  ];
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render () {
    let project = this.props.projects.map((project, i) => {
      return (
        <ProjectIndexItem project={project} key={project.id} image={this.images[i]} />
      )
    })

    return (
      <div className="project-wrapper">
        <h3 className="featured-title">Featured</h3>
        <ul className="project-grid">
          {project}
        </ul>
      </div>
    );
  }
}

export default ProjectIndex;