class Api::V1::DestinationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Destination.all
  end

  def show
    destination = Destination.find(params[:id])
    render json: destination
  end

  def create
    destination = Destination.new(destination_params)
    if destination.save
      render json: { destinations: destination }
    else
      render json: { error: destination.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def destination_params
    params.permit(:id, :name, :activities, :state, :address, :cost, :price, :website)
  end

end
