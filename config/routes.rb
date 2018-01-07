Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index, :show]
    end
  end

  root 'static_pages#index'
  get '*path', to: 'static_pages#index'
end
