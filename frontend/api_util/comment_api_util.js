export const fetchComment = (id) => {
  // debugger
  return (
    $.ajax({
      url: `/api/comments/${id}`,
      method: "get"
    })
  );
};

export const createComment = (comment) => {
  return (
    $.ajax({
      url: "/api/comments",
      method: "post",
      data: {
        comment: comment
      }
    })
  );
};

export const updateComment = (comment) => {
  return (
    $.ajax({
      url: `api/comments/${comment.id}`,
      method: "patch",
      data: {
        comment: comment
      }
    })
  );
};

export const deleteComment = (id) => {
  return (
    $.ajax({
      url: `api/comments/${id}`,
      method: "delete",
    })
  );
};