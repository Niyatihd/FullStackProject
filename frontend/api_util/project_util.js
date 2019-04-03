export const fetchProjects = (search_string) => {
  return (
    $.ajax({
      url: `api/projects`,
      method: "get",
      data: {search_string}
    })
  );
};

export const fetchProject = (id) => {
  return (
    $.ajax({
      url: `api/projects/${id}`,
      method: "get"
    })
  );
};

export const createFollow = (follow) => {
  return (
    $.ajax({
      url: "api/follows",
      method: "post",
      data: {
        follow: follow
      }
    })
  );
};

export const deleteFollow = (id) => {
  return (
    $.ajax({
      url: `api/follows/${id}`,
      method: "delete",
    })
  );
};

export const createProject = (project) => {
  return (
    $.ajax({
      url: "api/projects",
      method: "post",
      data: { 
        project: project 
      }
    })
  );
};

export const deleteProject = (id) => {
  return (
    $.ajax({
      url: `api/projects/${id}`,
      method: "delete"
    })
  );
};



// DELETE
window.fetchProjects = fetchProjects;
