import React, { Component } from 'react'
import ApiClient from '../Globals'
import Home from './Home'

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

  handlePush = (e) => {
    this.props.handleSubmit(e, this.state)
    this.props.history.push('/coasters')
  }

  //handle submit here

  //also pass down the axios "post" call from app.js to here.
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>RollercoasterForm</h1>
        <form onSubmit={(e) => this.handlePush(e)}>
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
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// form goes in the Div
// add e to handlecoaster ( attach to form)
