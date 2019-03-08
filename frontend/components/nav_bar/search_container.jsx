import { connect } from 'react-redux';
import React from 'react';
import { searchByTitle } from '../../reducers/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Redirect , withRouter } from 'react-router-dom';
import { fetchProjects } from '../../actions/project_actions';


const mapDispatchToProps = dispatch => ({
  // searchByTitle: () => dispatch(searchByTitle(string)),
  fetchProjects: (string) => dispatch(fetchProjects(string)),
});

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      searchString: e.currentTarget.value
    });
  }
   
  handleSubmit(e) {
    // window.location.href = "http://localhost:3000/#/index";
    this.props.history.push(`/search/${this.state.searchString}`);
    e.preventDefault();
    // this.props.fetchProjects(this.state.searchString);
    this.setState({
      searchString: ""
    });
  }


  render() {

    return (
      <form className="search-form">
        <input onChange={this.handleInput} type="text" placeholder="  Let's Make ..." name="search" value={this.state.searchString} />
        <button onClick={this.handleSubmit} type="submit"><FontAwesomeIcon className="search-icon" icon="search" /></button>
        <Link to="/index" id="featured-proj-btn">Featured</Link>
        {this.props.newProjectButton}
      </form>      
    )
  }
}


export default withRouter(connect(null, mapDispatchToProps)(SearchContainer));
