class Api::FollowsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @follows = Follow.all
    render 'api/follows/index'
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id
    @follow.project_id = params[:follow][:project_id]

    if @follow.save #checks and saves the follow
      render 'api/follows/show'
    else
      render json: @follow, status: :unprocessable_entity
    end
  end

  def destroy
    follow = follow.find(params[:id])
    follow_id = follow.id
    # debugger
    follow.destroy
    render json: { id: follow_id }
  end

  private
  def follow_params
    params.require(:follow).permit(:user_id, :project_id)
  end
end
