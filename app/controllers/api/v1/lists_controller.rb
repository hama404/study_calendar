class Api::V1::ListsController < ApplicationController
  def index
    lists = List.order(:id)
    render json: lists
  end

  def show
    list = List.find(params[:id])
    render json: list
  end

  def create
    list = List.new(list_params)
    if list.save
      render json: list
    else
      render json: list.errors, status: 422
    end
  end

  def update
    list = List.find(params[:id])
    if list.update(list_params)
      render json: list
    else
      render json: list.errors, status: 422
    end
  end

  def destroy
    if List.destroy(params[:id])
      head :no_content
    else
      render json: { error: "Failed to destroy" }, status: 422
    end
  end

  private

  def list_params
    params.require(:list).permit(:name, :date, :time, :color, :completed)
  end
end
