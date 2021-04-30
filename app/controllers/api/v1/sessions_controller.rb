class Api::V1::SessionsController < ApplicationController
  def whoami
    render json: current_user, status: :ok
  end

  def search
    keyword = params[:q]
    data = {
      q: keyword
    }
    render json: data, status: :ok
  end
end
