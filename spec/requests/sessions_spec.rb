require 'rails_helper'

RSpec.describe "Api::V1::Sessions", type: :request do
  describe "GET /api/v1/sessions" do
    it "get who am i" do
      get api_v1_whoami_path
      expect(response).to have_http_status(200)
    end
  end
end
