 Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
    # resources :steps, only: [:show]
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:index, :create, :update, :show, :destroy]
    resources :steps, only: [:create, :update, :destroy, :index]
    resources :comments, only: [:index, :create, :update, :destroy, :show]
    resources :follows, only: [:index, :create, :destroy, :show]
  end
end
