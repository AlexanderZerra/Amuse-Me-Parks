import React, { Component } from 'react'
import RollerCoasterCard from '../component/RollerCoasterCard'

export default class CoasterList extends Component {
  render() {
    console.log(this.props.rollercoasters)
    return (
      <div>
        {this.props.rollercoasters
          ? this.props.rollercoasters.map((coaster, index) => (
              <div
                key={index}
                style={{ border: '1px solid black' }}
                onClick={() =>
                  this.props.history.push(`/coasterdetails/${coaster._id}`)
                }
              >
                <RollerCoasterCard rollercoaster={coaster} />
              </div>
            ))
          : null}
      </div>
    )
  }
}
