class ApplicationController < ActionController::API
  def fallback_index_html
    render :file => 'todo-app/public/index.html'
  end
end
