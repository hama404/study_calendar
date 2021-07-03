Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'site#index'
  get 'calendar', to: 'site#index'
  get 'lists', to: 'site#index'
  get 'login', to: 'site#index'
  get 'signup', to: 'site#index'

  namespace :api do
    namespace :v1 do
      get '/whoami', to: 'sessions#whoami'
      get '/search', to: 'sessions#search'
      resources :lists, only: %i[index show create update destroy]
    end
  end

  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
end
