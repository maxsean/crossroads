# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project1 = Project.create!(name: "YANA", description: "Chronic Illness Patient Support", url: "yana-app.herokuapp.com", technologies: ["ruby on rails", "react.js", "d3.js"], images: ["welcome.png", "communities.png", "forum.png", "post.png", "comments.png", "survey.png", "charts.png"])
