export const createStep = (step) => {
  // debugger
  return (
    $.ajax({
      url: "/api/steps",
      method: "post",
      data: {
        step: step
      }
    })
  );
};

export const updateStep = (step) => {
  return (
    $.ajax({
      url: `api/steps/${step.id}`,
      method: "patch",
      data: {
        step: step
      }
    })
  );
};

export const deleteStep = (id) => {
  return (
    $.ajax({
      url: `api/steps/${id}`,
      method: "delete",
    })
  );
};