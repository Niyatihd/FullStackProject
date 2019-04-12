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
    # debugger
    # request.body.string
    
    @project = Project.new(project_params)
    @project.author_id = current_user.id
    photo1 = open("https://s3-us-west-1.amazonaws.com/wizardables-dev/splash1.jpg")
    photo2 = open("https://s3-us-west-1.amazonaws.com/wizardables-dev/lp1.jpg")
    # photo3 = open("https://s3-us-west-1.amazonaws.com/wizardables-dev/lp3.jpg")
    # if @project.photos.length == 0
      @project.photos.attach(io: photo1, filename: 'splash1.jpg')
      @project.photos.attach(io: photo2, filename: 'lp1.jpg')
    # end

    if @project.save
      render 'api/projects/show'
      # render json: @project
    else
      render json: ["Title and description cannot be empty"], status: 435
      # render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    # @project = Project.find(params[:id]) #to test on postman
    @project = current_user.authored_projects.find(params[:project][:id])
    # debugger
    @project.photos.last.purge
    # end
    # @project.photos.last.purge
    if @project.update_attributes(project_params)
      render 'api/projects/show'
    else
      render :json ["Not authorized to edit project!!"], status: 435
    end
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
    # puts request.body.string
    params.require(:project).permit(:title, :description, photos: [])
    # raise params.inspect
    # params.require(:project).permit(:title, :description, :author_id, photos: [])
  end

end
