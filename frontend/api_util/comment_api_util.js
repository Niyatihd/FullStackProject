export const createComment = (comment) => {
  // debugger
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
      url: `api/comment/${comment.id}`,
      method: "patch",
      data: {
        post
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