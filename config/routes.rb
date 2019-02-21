Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'users/registrations', passwords:'users/passwords', sessions: 'users/sessions', confirmations:'users/confirmations'}

  root to: 'home#index'

  namespace :api do

  end
end
