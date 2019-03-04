export const getProject = (state, projectId) => {
  let project = {};
  let projects = state.entities.projects;
  let results = Object.values(projects);
  for (var i = 1; i <= results.length; i++) {
    project[i] = results[i - 1];
  }

  return project[projectId];
};