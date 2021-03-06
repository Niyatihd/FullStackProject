class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  #associations
  has_many :authored_projects,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Project

  has_many :follows,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Follow

  has_many :followed_projects,
    through: :follows, 
    source: :project

  has_many :project_comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Comment

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password) 
    @user = User.find_by({username: username})

    if @user && @user.is_password?(password)
      @user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end
end