class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  
  private

  def render_react_app(app_name, initial_state = {})
    @package = app_name
    @initial_state = initial_state.to_json
    render html: '', layout: 'react'
  end
end
