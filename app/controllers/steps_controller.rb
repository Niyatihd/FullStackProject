class StepsController < ApplicationController
   def show
    @step = Step.find(params[:id])
    render :show
  end
end