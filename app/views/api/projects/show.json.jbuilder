json.project do
  json.partial! 'project', project: @project
end

@project.steps.each do |step|
  json.steps do
    json.set! step.id do
      json.partial! 'api/steps/step', step: step
    end
  end
end

json.author @project.author

# //Note:Render each under separate headsto be an outermost key in 
# the state and set their own reducers