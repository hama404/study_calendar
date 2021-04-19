Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'site#index'
  get 'home', to: 'site#index'
  get 'todo', to: 'site#index'
  
  namespace :api do
    namespace :v1 do
      resources :lists, only: %i[index show create update destroy]
    end
  end
end
