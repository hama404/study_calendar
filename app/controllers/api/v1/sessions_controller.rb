class Api::V1::SessionsController < ApplicationController
  def whoami
    if (user_signed_in?)
      render json: {current_user:"sign in now"}, status: :ok
    else
      render json: {current_user:"sign out now"}, status: :ok
    end
  end
end
