json.project do
  json.partial! 'project', project: @project
  json.commentIds @project.comments.pluck(:id)
end

@project.steps.each do |step|
  json.steps do
    json.set! step.id do
      json.partial! 'api/steps/step', step: step
    end
  end
end

@project.comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

@project.follows.each do |follow|
  json.follows do
    json.set! follow.id do
      json.partial! 'api/follows/follow', follow: follow
    end
  end
end

# json.author @project.author 
json.project_author do
  json.extract! @project.project_author, :id, :username, :email
end
# //Note:Render each under separate headsto be an outermost key in 
# the state and set their own reducers

