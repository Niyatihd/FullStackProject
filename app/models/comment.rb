class Comment < ApplicationRecord
  validates :body, :author_id, :project_id, presence: true

  belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Project

  belongs_to :comment_author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

def author_username
  comment_author.username
end

end