import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

///////DELETE
import { fetchProjects } from './actions/project_actions';
import { fetchProject } from './actions/project_actions';
///////DELETE

document.addEventListener('DOMContentLoaded', () => {
  let store;
  // debugger
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  ///////DELETE
  window.store = store;
  // window.fetchProjects = fetchProjects();
  window.fetchProject = fetchProject(1);
  // window.createFollow = fetchProject(1);
  ///////DELETE
  
  // debugger
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
