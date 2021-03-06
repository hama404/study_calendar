require 'rails_helper'

RSpec.describe User, type: :model do
  describe '.connection_config' do
    subject { User.connection_config[:database] }
    it 'connect to db' do
      is_expected.to match(/myapp_test/)
      is_expected.not_to match(/myapp_production/)
    end
  end

  describe 'assosiate' do
    let(:association) { User.reflect_on_association(target) }

    context 'user' do
      let(:target) { :list }
      pending 'connect later' do
        it { expect(association.macro).to eq :belongs_to }
        it { expect(association.class_name).to eq 'User' }
      end
    end
  end
end
