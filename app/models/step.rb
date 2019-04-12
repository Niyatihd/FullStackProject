class Step < ApplicationRecord
  validates :title, :description, :project_id, presence: true

  has_one_attached :photo

  belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Project
end
