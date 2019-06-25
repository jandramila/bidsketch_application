class DocumentsController < ApplicationController
  def show
    sample_document = Document.includes(:pages, pages: [:checkboxes]).first
    pages = sample_document.pages.map do |page|
      page.as_json.merge(checkboxes: page.checkboxes)
    end

    render_react_app :documents,
      document: {
        id: sample_document.id,
        pages: pages,
      }
  end
end
