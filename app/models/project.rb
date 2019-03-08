class Project < ApplicationRecord
  validates :title, :description, :author_id, presence: true
  validates :title, uniqueness: true

  belongs_to :project_author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :follows,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Follow

  has_many :followers,
    through: :follows,
    source: :user

  has_many :steps,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Step

  has_many :comments,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Comment

  def proj_follows
    follows.length
  end

  def proj_author
    project_author
  end

  def self.search_by_title(description)
    projects = Project.arel_table
    Project.where(projects[:description].matches("%#{description}%"))
  end

  def self.search_by_category(item)
    projects = Project.arel_table
    Project.where(projects[:category].matches("#{item}"))
  end

end

