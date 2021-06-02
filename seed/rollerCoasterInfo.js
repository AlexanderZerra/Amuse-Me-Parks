const db = require('../db')
const { rollercoaster } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rollercoaster = [
    {
      name: 'Xcelerator',
      themePark: 'Knotts Berry Farm',
      description:
        ' Launch rollercoaster that goes from 0-82 MPH in 2.3 seconds with a height of 205 feet. Added features include a 90 degree straight down drop',
      height: '205 feet',
      length: '2202 feet',
      topSpeed: '82 mph',
      image: ''
    },
    {
      name: 'Hangetime',
      themePark: 'Knotts Berry Farm',
      description:
        'First and only dive rollercoaster in CALIFORNIA. Added features include a vertical drop with brake suspending you before the release to the first drop. ',
      height: '150 feet',
      length: '2189 feet',
      topSpeed: '57 mph',
      image: ''
    },
    {
      name: 'Ghostrider',
      description:
        'Longest, tallest and fastest wooden roller coaster on the West Coast',
      themePark: 'Knotts Berry Farm',
      height: '118 feet',
      length: '4533 feet',
      topSpeed: '56 mph',
      image: ''
    },
    {}
  ]

  await rollercoaster.insertMany(rollercoaster)
  console.log('you win')
}

const run = async () => {
  await main()
  db.close()
}

run()
