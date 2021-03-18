Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/", to: 'homes#index'
  get "/destinations", to: 'homes#index'
  get "/destinations/new", to: 'homes#index'
  get "/destinations/:id", to: 'homes#index'
  get "/states", to: 'homes#index'
  get "/states/:id", to: 'homes#index'
  get "./../public/woods.jpg", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :destinations, only: [:index, :create, :show]
      resources :states, only: [:index, :show]
    end
  end
end
