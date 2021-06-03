import React, { Component } from 'react'
import RollerCoasterCard from '../component/RollerCoasterCard'

export default class CoasterList extends Component {
  render() {
    console.log(this.props.rollercoasters)
    return (
      <div>
        {this.props.rollercoasters
          ? this.props.rollercoasters.map((coaster, index) => (
              <RollerCoasterCard />
            ))
          : null}
      </div>
    )
  }
}
