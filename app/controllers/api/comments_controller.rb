class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @comments = Comment.all
    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @comment.project_id = params[:comment][:project_id]

    if @comment.save #checks and saves the comment
      render 'api/comments/show'
    else
      render json: @comment, status: :unprocessable_entity
    end
  end

  def update 
    # @comment = Comment.find(params[:id])
    @comment = current_user.project_comments.find(params[:id])

    if @comment.update_attributes(comment_params)
      render 'api/comments/show'
    else
      render :json ["Not authorized to edit comment!!"], status: 435
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render 'api/comments/show'
  end

  def destroy
    comment = Comment.find(params[:id])
    comment_id = comment.id
    # debugger
    comment.destroy
    render json: { id: comment_id }
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :project_id)
  end
end
