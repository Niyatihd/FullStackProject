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

  def self.search_by_title(title)
    # Project
    #   .where("projects.title LIKE ?", "%#{title}%" )
    # one = self.projects.title.downcase
    # two = title.downcase

    # Project.where("projects.title.downcase LIKE ?", "%#{two}%")
    #  Project.where(:title => ['title LIKE ?', title])
     projects = Project.arel_table
     Project.where(projects[:title].matches("%#{title}%"))
  end

end

# Product.where('lower(name) = ?', name.downcase).first 
