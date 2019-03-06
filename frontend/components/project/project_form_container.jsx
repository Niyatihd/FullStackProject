import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {

  return ({
  
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));