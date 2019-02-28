class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token #only for postman to access db

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Username/Password, Please Sign Up"], status: 420
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ["Nobody Signed in"], status: 430
    end
  end
end
