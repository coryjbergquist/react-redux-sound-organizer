Rails.application.routes.draw do
  # root 'sounds#index'

  resources :sounds
  #get 'sounds', to: 'sounds#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
