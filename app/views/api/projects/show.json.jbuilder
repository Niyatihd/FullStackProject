json.partial! 'project', project: @project
json.stepIds @project.steps.pluck(:id)
@project.steps.each do |step|
  json.steps do
    json.set! step.id do
      json.partial! 'api/steps/step', step: step
    end
  end
end
json.author @project.author
