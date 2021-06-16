FactoryBot.define do
  factory :list do
    name { Faker::Name.name }
    date { '2021-04-19' }
    time { 90 }
    color { 'rgb(255, 99, 132)' }
    completed { false }
  end
end
