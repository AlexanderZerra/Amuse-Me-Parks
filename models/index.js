const { model } = require('mongoose')
const RollercoasterSchema = require('./rollercoaster')
const ThemeparkSchema = require('./themepark')

const rollercoaster = model('rollercoasters', RollercoasterSchema)
const themepark = model('themeparks', ThemeparkSchema)

module.exports = {
  rollercoaster,
  themepark
}
