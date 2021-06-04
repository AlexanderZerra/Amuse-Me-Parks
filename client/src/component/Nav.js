import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/themeparks">Theme Parks</NavLink>
          <NavLink to="/newrolleroaster">Add your own Ride</NavLink>
          <NavLink to="/coasters">Rollercoasters</NavLink>
        </div>
      </nav>
    )
  }
}
