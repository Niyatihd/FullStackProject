import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';
import StepsReducer from './steps_reducer';
import AuthorReducer from './author_reducer';
import CommentsReducer from './comments_reducer';
import PotionsReducer from './potions_reducer';
import CharmsReducer from './charms_reducer';

const entitiesReducer =  combineReducers({
  users: UsersReducer,
  projects: ProjectsReducer,
  steps: StepsReducer,
  project_author: AuthorReducer,
  comments: CommentsReducer,
  potions: PotionsReducer,
  charms: CharmsReducer
});

export default entitiesReducer;