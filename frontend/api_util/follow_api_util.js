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