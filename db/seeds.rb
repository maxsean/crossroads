# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project1 = Project.create!(name: "YANA", description: "YANA is an online forum for people with chronic illnesses, their medical professionals, their friends, and their family members. It is used for building communities to share stories, ask for help, and bring attention to new medical breakthroughs. YANA also features surveys and interactive data visualizations to help members explore their community.

I built YANA to create a safe, supportive, and anonymous environment for people who feel uncomfortable talking about their conditions in public and tend to isolate themselves from others. I wanted patients to feel that they are not alone by sharing their stories, supporting others in need, and learning about their online community.", url: "https://yana-app.herokuapp.com", technologies: ["rails", "react", "d3"], images: ["yana/welcome.png", "yana/communities.png", "yana/forum.png", "yana/post.png", "yana/comments.png", "yana/survey.png", "yana/charts.png"])

project2 = Project.create!(name: "Eatalike", description: "Eatalike is a web application for reviewing restaurants. It was built collaboratively in two weeks with a group of four junior web developers. Eatalike features an elaborate rating system to capture a reviewer’s opinion on a restaurant’s quality of service, noise level, lighting, cleanliness, and taste based on his or her reason for visiting. It also has interactive visualizations to help users explore a restaurant’s reviews.

We wanted a review site that didn’t stick you with a generic 4-star rating system, but rather one that encouraged users to leave thoughtful feedback that could inform people of restaurant experiences. With the ability to see this visualized with charts, a user can find restaurants that fit their diverse preferences.", url: "https://eatalike.herokuapp.com", technologies: ["rails", "react", "d3"], images: ["eatalike/welcome.png","eatalike/restaurant.png","eatalike/review.png","eatalike/reviews.png"])

blog1 = Blog.create!(title: "First Post!", body: "A few weeks ago I started going to Code for Boston meetups. Code for Boston is a volunteer Civic Technology meetup that is part of the Code for America Brigade network. It is made up of developers, designers, activists and others who use creative technology to solve civic and social problems.

I worked on the Cliff Effects webapp to help Project Hope case workers make quantifiable predictions about their clients' potential cliff effects - and advise their clients accordingly.

Check out Code for Boston
http://www.codeforboston.org/
Check out Cliff Effects on github
https://github.com/codeforboston/cliff-effects")
