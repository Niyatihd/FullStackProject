import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { fetchProjects } from './actions/project_actions';

// document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore();

//   // TESTING START
//   window.getState = store.getState;
//   window.dispatch = store.dispatch;
//   // TESTING END

//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store} />, root);
// });


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    window.store = store;
    window.fetchProjects = fetchProjects();
    delete window.currentUser;
  } else {
    store = configureStore();
  }
 
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
