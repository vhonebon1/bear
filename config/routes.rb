Rails.application.routes.draw do
  scope '/api/v1' do
    resources :todos
  end

  get '*path', to: "static_pages#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
