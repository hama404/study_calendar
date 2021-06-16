require 'rails_helper'

RSpec.describe "Lists", type: :request do
  # describe "GET /lists" do
  #   it "works! (now write some real specs)" do
  #     get lists_index_path
  #     expect(response).to have_http_status(200)
  #   end
  # end

  describe "GET /api/v1/lists" do
    it 'get all lists' do
      create_list(:list, 10)

      get api_v1_lists_path
      json = JSON.parse(response.body)
  
      expect(response.status).to eq(200)
      expect(json.length).to eq(10)
    end
  end

  describe "GET /api/v1/lists/:id" do
    it 'get list (id = 1)' do
      list = create(:list, name: 'test-title')
  
      get api_v1_list_path(list.id)
      json = JSON.parse(response.body)
  
      expect(response.status).to eq(200)
      expect(json["name"]).to eq(list.name)
    end
  end
  
  describe "POST /api/v1/lists" do
    let(:list) { create(:list) }
    let(:params) { attributes_for(:list) }

    it 'create new list' do
      expect do
        post api_v1_lists_path, params: { list: params }
      end.to change(List, :count).by(+1)
      expect(response.status).to eq(200)
    end
  end   

  describe "PATCH /api/v1/lists/:id" do
    let(:list) { create(:list, name: "old-title") }
    let(:params) { {name: "new-title"} }

    it 'edit list' do
      patch api_v1_list_path(list.id), params: { list: params }
      json = JSON.parse(response.body)
  
      expect(response.status).to eq(200)
      expect(json['name']).to eq('new-title')
   end
  end

  describe "DELETE /api/v1/lists/:id" do
    it 'delete list' do
      list = create(:list)
      expect do
        delete api_v1_list_path(list.id)
      end.to change(List, :count).by(-1)
      expect(response.status).to eq(204)
    end
  end
end
