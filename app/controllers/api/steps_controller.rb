class Api::StepsController < ApplicationController
  #DELETE
  skip_before_action :verify_authenticity_token

  def create
    @step = Step.new(step_params)
    @step.project_id = params[:step][:project_id]

    if @step.save
      # render 'api/step/show'
      render json: @step
    else
      render json: @step, status: :unprocessable_entity
    end
  end

  # def edit
    
  # end

  def destroy
    step = Step.find(params[:id])
    step_id = step.id
    step.destroy
    render json: { id: step_id }
  end

  private
  def step_params #might change for pictures and videos from active record
    params.require(:step).permit(:title, :description, :project_id)
  end

end
