class Api::ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @projects = Project.all
    render 'api/projects/index'
  end

  # def create
  #   @project = Project.new(project_params)

  #   if @project.save
  #     render 'api/projects/show'
  #   else
  #     render json: @project.errors.full_messages, status: :unprocessable_entity
  #   end
  # end

  def edit
    
  end

  def show
    @project = Project.find(params[:id])
    render 'api/projects/show'
  end

  def destroy
    
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :author_id)
  end

end
