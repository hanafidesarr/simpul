# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Room.create!(name: 'Room Interview')
User.create!([{name: 'Hanafi desar', description: 'Job Seeker', url_image: "https://drive.google.com/uc?id=1bthts09ljWCcB8ruiwqPi4BsrAkUd8-U", room_id: Room.first.id},
						{name: 'Kezia Oktiadiarti', description: 'Job Hiring', url_image: "https://drive.google.com/uc?id=1JWazHYPl8Oa7cU3jwJGkh-5HYRZ4z3iT", room_id: Room.first.id}])
