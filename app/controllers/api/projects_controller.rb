class Api::ProjectsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if params[:search_string]
      @projects = Project.search_by_title(params[:search_string])
    else
      @projects = Project.all
    end
    # debugger

    render 'api/projects/index'
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id

    if @project.save
      render 'api/projects/_project'
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def edit
    
  end

  def show
    @project = Project.find(params[:id])
    # debugger
    render 'api/projects/show'
  end

  def destroy
    project = Project.find(params[:id])
    project_id = project.id
    project.destroy
    render json: {id: project_id}
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :author_id, photos: [])
  end

end
