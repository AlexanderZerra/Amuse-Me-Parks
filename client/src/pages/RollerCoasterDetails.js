import React, { Component } from 'react'
import ApiClient from '../Globals'

export default class RollerCoasterDetails extends Component {
  constructor() {
    super()
    this.state = {
      rollercoaster: null
    }
  }

  componentDidMount() {
    this.getCoasterById()
  }

  getCoasterById = async () => {
    try {
      const res = await ApiClient.get(
        `/rollercoaster/${this.props.match.params._id}`
      )
      console.log(res)
      this.setState({ rollercoaster: res.data.rollercoaster })
    } catch (error) {
      throw error
    }
  }
  deleteCoaster = async (id) => {
    try {
      await ApiClient.delete(`/rollercoaster/${id}`)
      await this.props.getAllRollerCoasters()
      this.props.history.push(`/coasters`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.props.match.params._id)

    return (
      <div>
        {this.state.rollercoaster !== null ? (
          <div>
            <img
              src={this.state.rollercoaster.image}
              alt={this.state.rollercoaster.name}
            />
            <h2 className="rollercoastername">
              {this.state.rollercoaster.name}
            </h2>
            <h3 className="rollercoasterdescription">
              {this.state.rollercoaster.description}
            </h3>
            <h4 className="rollercoasterheight">
              {this.state.rollercoaster.height}
            </h4>
            <p className="rollercoasterlength">
              {this.state.rollercoaster.length}{' '}
            </p>
            <p className="rollercoasterheight">
              {this.state.rollercoaster.topSpeed}
            </p>
            <button
              onClick={() => this.deleteCoaster(this.state.rollercoaster._id)}
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
    )
  }
}
