class Api::StepsController < ApplicationController
  #DELETE
  skip_before_action :verify_authenticity_token
  def index
    @steps = Step.all
    render json: @steps
  end

  def create
    # debugger
    @step = Step.new(step_params)
    @step.project_id = params[:step][:project_id]

    if @step.save
      render 'api/steps/show'
      # render json: @step #to test on postman
    else
      render json: @step, status: :unprocessable_entity
    end
  end

  def update
    # debugger
    @step = Step.find(params[:step][:id])
    # @step = current_user.authored_projects.find(params[:step][:project_id]).steps[params[:id]]
    if @step.update_attributes(step_params)
      render 'api/steps/show'
    else
      render :json ["Not authorized to edit step!"], status: 435
    end
  end

  def destroy
    step = Step.find(params[:id])
    step_id = step.id
    step.destroy
    render json: { id: step_id }
  end

  private
  def step_params
    # puts request.body.string #to debug
    params.require(:step).permit(:title, :description, :id, :project_id, :photo)
  end

end
