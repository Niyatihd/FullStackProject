import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';
import { debug } from 'util';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.images = [//icon
      window.images.splash1,
      window.images.lp1,
      window.images.ll1,
      window.images.sk1,
      window.images.w1,
      window.images.al1,
      window.images.f1,
      window.images.am4,
      window.images.vb4,
      window.images.dl2,
      window.images.ob4,
      window.images.st1,
      window.images.tr4,
      window.images.r3,
      window.images.ss6,
      window.images.hh5,
      window.images.rrd4,
      window.images.ng1,
      window.images.qq4,
      window.images.hjp7,
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