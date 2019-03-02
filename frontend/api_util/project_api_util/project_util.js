export const fetchProjects = () => {
  return (
    $.ajax({
      url: "api/projects",
      method: "GET"
    })
  );
};