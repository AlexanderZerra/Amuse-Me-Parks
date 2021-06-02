const { Schema } = require('mongoose')

const themepark = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
})
module.exports = themepark
