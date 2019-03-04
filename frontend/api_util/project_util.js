export const fetchProjects = () => {
  return (
    $.ajax({
      url: "api/projects",
      method: "get"
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