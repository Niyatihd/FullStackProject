import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';
import { debug } from 'util';

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
    if (this.props.location.pathname.includes("search")) {
      // debugger
      this.props.fetchProjects(this.props.match.params.query);
    } else {
      this.props.fetchProjects();
    }
    // debugger
  }

  render () {
    let project = this.props.projects.map((project, i) => {
      return (
        <ProjectIndexItem project={project} key={project.id} image={this.images[i]} followsCount={this.props.followsCount}/>
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