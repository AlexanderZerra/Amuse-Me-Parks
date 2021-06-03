import React, { Component } from 'react'
import ApiClient from '../Globals'

export default class RollerCoasterForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      themePark: '',
      description: '',
      height: '',
      length: '',
      topSpeed: '',
      image: ''
    }
  }

  // handle change here
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleAddCoaster = () => {}

  //handle submit here

  //also pass down the axios "post" call from app.js to here.
  render() {
    return <div>//inside this div make a form with input</div>
  }
}
