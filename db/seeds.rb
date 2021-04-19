# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SAMPLE_LISTS = [
  {
    name: 'Ruby on Rails',
    date: '2021-04-19',
    time: 90,
    color: 'rgb(255, 99, 132)',
    completed: false,
  },
  {
    name: 'React',
    date: '2021-04-19',
    time: 80,
    color: 'rgb(54, 162, 235)',
    completed: false,
  },
  {
    name: 'AWS, ec2 server',
    date: '2021-04-19',
    time: 120,
    color: 'rgb(255, 205, 86)',
    completed: false,
  },
  {
    name: 'docker',
    date: '2021-04-19',
    time: 20,
    color: 'rgb(103, 58, 183)',
    completed: false,
  },
  {
    name: 'Ruby on Rails',
    date: '2021-04-20',
    time: 100,
    color: 'rgb(255, 99, 132)',
    completed: false,
  },
  {
    name: 'React',
    date: '2021-04-20',
    time: 70,
    color: 'rgb(54, 162, 235)',
    completed: false,
  },
  {
    name: 'AWS, ec2 server',
    date: '2021-04-20',
    time: 100,
    color: 'rgb(255, 205, 86)',
    completed: false,
  },
  {
    name: 'docker',
    date: '2021-04-20',
    time: 10,
    color: 'rgb(103, 58, 183)',
    completed: false,
  },
  {
    name: 'Ruby on Rails',
    date: '2021-04-21',
    time: 90,
    color: 'rgb(255, 99, 132)',
    completed: false,
  },
  {
    name: 'React',
    date: '2021-04-21',
    time: 90,
    color: 'rgb(54, 162, 235)',
    completed: false,
  },
  {
    name: 'AWS, ec2 server',
    date: '2021-04-21',
    time: 100,
    color: 'rgb(255, 205, 86)',
    completed: false,
  },
  {
    name: 'docker',
    date: '2021-04-21',
    time: 25,
    color: 'rgb(103, 58, 183)',
    completed: false,
  },
]

SAMPLE_LISTS.each do |todo|
  List.create(todo)
end
