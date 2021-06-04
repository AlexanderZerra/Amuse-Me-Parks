import React, { Component } from 'react'

export default class RollerCoasterCard extends Component {
  render() {
    const { rollercoaster } = this.props

    return (
      <div>
        <img src={rollercoaster.image} alt={rollercoaster.name} />
        <h2>{rollercoaster.name}</h2>
        {/* //   <h3>{rollercoaster.themePark}</h3>
      //   <h4>{rollercoaster.height}</h4>
      //   <h5>{rollercoaster.length}</h5>
      //   <h6>{rollercoaster.topSpeed}</h6>
      //   <p>{rollercoaster.description}</p> */}
      </div>
    )
  }
}
