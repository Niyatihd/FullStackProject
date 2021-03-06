import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';
import StepsReducer from './steps_reducer';
import AuthorReducer from './author_reducer';
import CommentsReducer from './comments_reducer';
import FollowsReducer from './follows_reducer';
import NewProjectReducer from './new_project_reducer';

const entitiesReducer =  combineReducers({
  users: UsersReducer,
  projects: ProjectsReducer,
  steps: StepsReducer,
  project_author: AuthorReducer,
  comments: CommentsReducer,
  follows: FollowsReducer,
  newProject: NewProjectReducer
});

export default entitiesReducer;