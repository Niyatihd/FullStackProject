json.extract! step, :id, :title, :description, :project_id
if step.photo.attached?
  json.photo url_for(step.photo)
# else
#   json.photo "https://s3-us-west-1.amazonaws.com/wizardables-dev/splash1.jpg"
end
