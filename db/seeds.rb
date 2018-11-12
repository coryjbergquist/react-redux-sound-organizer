# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Sound.create(name: "Sound One", description: "it goes schwoooop")
Sound.create(name: "Sound Two", description: "it goes BWOOONG")

Comment.create(text: "comment 1 for sound 1", sound_id: "1")
Comment.create(text: "comment 1 for sound 2", sound_id: "2")
