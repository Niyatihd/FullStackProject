# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
# Comment.destroy_all

user1 = User.create!(username: 'robert', email: 'rob@rob.com', password: 'passwordrob')
user2 = User.create!(username: 'ned', email: 'ned@ned.com', password: 'passwordned')
user2 = User.create!(username: 'bilbo', email: 'bilbo@bilbo.com', password: 'passwordbilbo')

# comment1 = Comment.create!(body: 'great!', user_id: user1.id, artwork_id: artwork1.id)
# comment2 = Comment.create!(body: 'another great one', user_id: user2.id, artwork_id: artwork2.id)
# Like.create!(user_id: user1.id, likeable_id: comment1.id, likeable_type: 'Comment')
# Like.create!(user_id: user2.id, likeable_id: artwork2.id, likeable_type: 'Artwork')
