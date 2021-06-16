require 'rails_helper'

RSpec.describe "DeviseUsers", type: :request do
  let(:user) { create(:user) }

  describe "POST /auth" do
    subject { post user_registration_path, params: params }

    context "when current params" do
      let(:params) { attributes_for(:user) }
      it "create user" do
        subject
        res = JSON.parse(response.body)
        expect(res["status"]).to eq("success")
        expect(res["data"]["id"]).to eq(User.last.id)
        expect(res["data"]["email"]).to eq(User.last.email)
        expect(response).to have_http_status(200)
      end
    end

    context "when password_confirmation !== password" do
      let(:params) { attributes_for(:user, password_confirmation: "") }
      it "can't create user" do
        subject
        res = JSON.parse(response.body)
        expect(res["status"]).to eq("error")
        expect(res["errors"]["full_messages"]).to include("Password confirmation doesn't match Password")
        expect(response).to have_http_status(422)
      end
    end
  end

  describe "POST /auth/sign_in" do
    subject { post user_session_path, params: params }

    context "when current email, password" do
      let(:current_user) { create(:user) }
      let(:params) { { email: current_user.email, password: current_user.password } }

      it "log in" do
        subject
        expect(response.headers["uid"]).to be_present
        expect(response.headers["access-token"]).to be_present
        expect(response.headers["client"]).to be_present
        expect(response).to have_http_status(200)
      end
    end

    context "when invalid email" do
      let(:current_user) { create(:user) }
      let(:params) { { email: "test@example.com", password: current_user.password } }

      it "can't log in" do
        subject
        res = JSON.parse(response.body)
        expect(res["success"]).to be_falsey
        expect(res["errors"]).to include("Invalid login credentials. Please try again.")
        expect(response.headers["uid"]).to be_blank
        expect(response.headers["access-token"]).to be_blank
        expect(response.headers["client"]).to be_blank
        expect(response).to have_http_status(401)
      end
    end

    context "when invalid password" do
      let(:current_user) { create(:user) }
      let(:params) { { email: current_user.email, password: "hogehoge" } }
      it "can't log in" do
        subject
        res = JSON.parse(response.body)
        expect(res["success"]).to be_falsey
        expect(res["errors"]).to include("Invalid login credentials. Please try again.")
        expect(response.headers["uid"]).to be_blank
        expect(response.headers["access-token"]).to be_blank
        expect(response.headers["client"]).to be_blank
        expect(response).to have_http_status(401)
      end
    end
  end

  describe "DELETE /auth/sign_out" do
    subject { delete destroy_user_session_path, headers: headers }

    context "when user login" do
      let(:current_user) { create(:user) }
      let(:headers) { current_user.create_new_auth_token }

      it "log out" do
        subject
        res = JSON.parse(response.body)
        expect(res["success"]).to be_truthy
        expect(current_user.reload.tokens).to be_blank
        expect(response).to have_http_status(200)
      end
    end
  end
end
