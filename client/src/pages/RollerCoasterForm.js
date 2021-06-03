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
  handleAddCoaster = (e) => {
    event.preventDefault()
    const coaster = {
      name: this.state.name,
      themePark: this.state.themePark,
      description: this.state.description,
      height: this.state.height,
      length: this.state.length,
      topSpeed: this.state.topSpeed,
      image: this.state.image
    }
    ApiClient.post(`${BASE_URL}/newcoaster`, { coaster }).then((res) => {
      console.log(res)
      console.log(res.data)
    })
  }

  //handle submit here

  //also pass down the axios "post" call from app.js to here.
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="coaster name"
          />
          <input
            type="text"
            value={this.state.themePark}
            onChange={this.handleChange}
            name="themePark"
            placeholder="themePark"
          />

          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            name="description"
            placeholder="coaster description"
          />
          <input
            type="text"
            value={this.state.height}
            onChange={this.handleChange}
            name="height"
            placeholder="coaster height"
          />
          <input
            type="text"
            value={this.state.length}
            onChange={this.handleChange}
            name="length"
            placeholder="coaster length"
          />
          <input
            type="text"
            value={this.state.topSpeed}
            onChange={this.handleChange}
            name="topSpeed"
            placeholder="coaster topSpeed"
          />
          <input
            type="text"
            value={this.state.image}
            onChange={this.handleChange}
            name="image"
            placeholder="image url"
          />
        </form>
      </div>
    )
  }
}

// form goes in the Div
// add e to handlecoaster ( attach to form)
