json.extract! project, :id, :title, :description, :author_id, :category, :proj_follows, :follower_ids
# json.photo url_for(project.photo)
json.photos project.photos.map { |file| url_for(file) }
# json.photo "https://s3-us-west-1.amazonaws.com/wizardableseeds/ll1.jpeg"
