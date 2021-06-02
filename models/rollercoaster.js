const { Schema } = require('mongoose')

const Rollercoaster = new Schema({
  name: { type: String, required: true },
  themePark: { type: String, required: true },
  description: { type: String, required: true },
  height: { type: String, required: true },
  length: { type: String, required: true },
  topSpeed: { type: String, required: true },
  image: { type: String, required: true }
})

module.exports = Rollercoaster
