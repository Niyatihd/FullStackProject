// import { connect } from 'react-redux';
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link, Redirect, withRouter } from 'react-router-dom';
// import { fetchProjects } from '../../actions/project_actions';


// const mapDispatchToProps = dispatch => ({
//   fetchProjects: (string) => dispatch(fetchProjects(string)),
// });

// class CategoryContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       category: ""
//     };

//     // this.handleSubmitPotion = this.handleSubmitPotion.bind(this);
//     this.toggleState = this.toggleState.bind(this);
//   }



//   toggleState(e) {
//     this.setState(({ category: e.currentTarget.value }));
//     this.props.history.push(`/category/Potion`);
//     e.preventDefault();
//     this.setState(({ category: "" }));
//   }


//   render() {

//     return (
//       <div>
//         <button onClick={this.toggleState} type="submit" value="Potion"><FontAwesomeIcon className="search-icon" icon="search" />Potions</button>
//         {/* <button onClick={this.handleSubmit("Charm")} type="submit"><FontAwesomeIcon className="search-icon" icon="search" />Charms</button>
//         <button onClick={this.handleSubmit("Artifacts")} type="submit"><FontAwesomeIcon className="search-icon" icon="search" />Artifacts</button>
//         <button onClick={this.handleSubmit("Funfacts")} type="submit"><FontAwesomeIcon className="search-icon" icon="search" />Funfacts</button> */}
//       </div>
//     )
//   }
// }


// export default withRouter(connect(null, mapDispatchToProps)(CategoryContainer));
