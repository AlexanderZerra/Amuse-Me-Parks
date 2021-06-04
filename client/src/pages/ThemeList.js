import React, { Component } from 'react'

export default class ThemeList extends Component {
  render() {
    return (
      <div>
        {this.props.themeparks.map((park, index) => (
          <div key={index}>
            <div className="themephotoadd">
              <img src={park.image} alt={park.name} />
            </div>
          </div>
        ))}
      </div>
    )
  }
}
