const { model } = require('mongoose')
const RollercoasterSchema = require('./rollercoaster')
const ThemeparkSchema = require('./themepark')

const Rollercoaster = model('rollercoasters', RollercoasterSchema)
const Themepark = model('themeparks', ThemeparkSchema)

module.exports = {
  Rollercoaster,
  Themepark
}
