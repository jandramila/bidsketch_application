class Page < ApplicationRecord
  belongs_to :document
  has_many :checkboxes
end
