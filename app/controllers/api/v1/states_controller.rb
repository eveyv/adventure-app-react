class Api::V1::StatesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
   @states = render json: State.all
  end

  def show
    state = State.find(params[:id])
    render json: destination
  end
end
