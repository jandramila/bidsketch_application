class CheckboxesController < ApplicationController
  before_action :set_checkbox, only: [:update]

  def update
    @checkbox.update(checkbox_params)
    head :no_content
  end

  private

  def checkbox_params
    # whitelist params
    params.permit(:checked)
  end

  def set_checkbox
    @checkbox = Document.find(params[:document_id])
      .pages.find(params[:page_id])
      .checkboxes.find(params[:id])
  end
end
