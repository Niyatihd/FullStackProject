// export const fetchComment = (id) => {
//   // debugger
//   return (
//     $.ajax({
//       url: `/api/comments/${id}`,
//       method: "get"
//     })
//   );
// };

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

// export const updateComment = (comment) => {
//   return (
//     $.ajax({
//       url: `api/comments/${comment.id}`,
//       method: "patch",
//       data: {
//         comment: comment
//       }
//     })
//   );
// };

// export const deleteComment = (id) => {
//   return (
//     $.ajax({
//       url: `api/comments/${id}`,
//       method: "delete",
//     })
//   );
// };