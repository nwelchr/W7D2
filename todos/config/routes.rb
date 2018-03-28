Rails.application.routes.draw do

  namespace :api do
    resources :todos, only: [:show, :index, :create, :update, :destroy], defaults: {format: :json}
  end

  root to: 'static_pages#root'
end
