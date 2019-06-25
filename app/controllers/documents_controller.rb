class DocumentsController < ApplicationController
  def show
    render_react_app :documents
  end
end
