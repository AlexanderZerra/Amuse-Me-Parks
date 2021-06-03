import React, { Component } from 'react'

export default class ThemeList extends Component {
  render() {
    return (
      <div>
        {/* {this.props.themePark ? this.props.themePark.map((park,index)=>
      <div
      key={index}
      onclick={()=>
      this.props.history.push(`/themepark/${park._id}`)
    }
      >
        <ThemeParkCard themePark={park} />
        </div>
        ))
      :null } */}
      </div>
    )
  }
}
