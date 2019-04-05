import React from 'react';
import ProjectIndexItem from './project_index_item';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { debug } from 'util';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.projectOnClick = this.projectOnClick.bind(this);
  }
  
  //refactor into it's own container DELETE
  componentDidMount() {
    if (this.props.location.pathname.includes("search")) {
      // debugger
      this.props.fetchProjects(this.props.match.params.query);
    } else {
      this.props.fetchProjects();
    }
    // debugger
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.props.fetchProjects(this.props.match.params.query);
    }
  }

  projectOnClick(path) {
    // debugger
    this.props.history.push(path);
  }

  render () {
    // debugger
    let project = this.props.projects.map((project, i) => {
      return (
        <ProjectIndexItem project={project} key={project.id} followsCount={this.props.followsCount} projectOnClick={this.projectOnClick}/>
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