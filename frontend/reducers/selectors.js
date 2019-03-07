export const getProject = (state, projectId) => {
  let project = {};
  let projects = state.entities.projects;
  let results = Object.values(projects);
  for (var i = 1; i <= results.length; i++) {
    project[i] = results[i - 1];
  }

  return project[projectId];
};

export const getProjectByCategory = (entities, category="") => {
  // debugger
  let selected = {};
  let projects = entities.projects;
  let results = Object.values(projects);
  for (var i = 1; i <= results.length; i++) {
    let id = results[i].id;
    if (results[i].category === category) {
      selected[id] = results[i];
    }
  }

  return selected;
};

export const getFollowId = (follows, user_id, project_id) => {
  // debugger
  for(var i = 0; i < follows.length; i++) {
    if (follow[i].user_id === user_id && follow[i].project_id === project_id) {
      return follow[i].id;
    }
  }
};