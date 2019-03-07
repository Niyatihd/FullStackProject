class Follow < ApplicationRecord
  validates :project_id, :user_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Project
end
