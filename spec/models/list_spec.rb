require 'rails_helper'

RSpec.describe List, type: :model do
  describe '.connection_config' do
    subject { List.connection_config[:database] }
    it 'connect to db' do
      is_expected.to match("db/test.sqlite3")
      is_expected.not_to match(Rails.application.credentials.db[:database])
    end
  end

  describe 'assosiate' do
    let(:association) { List.reflect_on_association(target) }

    context 'user' do
      let(:target) { :user }
      pending 'connect later' do
        it { expect(association.macro).to eq :belongs_to }
        it { expect(association.class_name).to eq 'User' }
      end
    end
  end
end
