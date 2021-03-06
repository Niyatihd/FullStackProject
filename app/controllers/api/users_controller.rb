class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Username/Password"], status: 420
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
