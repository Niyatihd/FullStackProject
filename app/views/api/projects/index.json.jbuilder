@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project
    # json.photoUrls project.photos.map { |file| url_for(file) }
    # json.stepIds []
  end
end