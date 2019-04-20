export const createStep = (step) => {
  // debugger
  return (
    $.ajax({
      url: "/api/steps",
      method: "post",
      data: step,
      contentType: false,
      processData: false
    })
  );
};

export const updateStep = (step) => {
  return (
    $.ajax({
      url: `api/steps/${step.id}`,
      method: "patch",
      data: step,
      contentType: false,
      processData: false
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