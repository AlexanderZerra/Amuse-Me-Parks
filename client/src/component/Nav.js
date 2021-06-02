import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/themeParks">Theme Parks</NavLink>
          <NavLink to="/new">Add your own Ride</NavLink>
        </div>
      </nav>
    )
  }
}
