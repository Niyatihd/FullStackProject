import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';
import StepsReducer from './steps_reducer';
import AuthorReducer from './author_reducer';

const entitiesReducer =  combineReducers({
  users: UsersReducer,
  projects: ProjectsReducer,
  steps: StepsReducer,
  author: AuthorReducer,
  project: ProjectsReducer
});

export default entitiesReducer;