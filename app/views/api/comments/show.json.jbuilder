json.comment do
  json.partial! 'comment', comment: @comment
end

# json.comment_author do
#   json.partial! '/api/users/user', user: @comment.comment_author
# end