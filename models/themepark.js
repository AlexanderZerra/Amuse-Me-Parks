const { Schema } = require('mongoose')

const Themepark = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
})
module.exports = Themepark
