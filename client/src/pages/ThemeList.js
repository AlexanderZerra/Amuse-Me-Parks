import React, { Component } from 'react'

export default class ThemeList extends Component {
  render() {
    return (
      <div>
        {this.props.themeparks.map((park, index) => (
          <div key={index}>
            <p>{park.name}</p>
          </div>
        ))}
      </div>
    )
  }
}
