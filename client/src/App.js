import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ApiClient from './Globals'

import RollerCoasterCard from './component/RollerCoasterCard'
import TextInput from './component/TextInput'
import Nav from './component/Nav'

import Home from './pages/Home'
import CoasterList from './pages/CoasterList'
// import RollerCoasterDetails from './pages/RollerCoasterDetails'
// import RollerCoasterForm from './pages/RollerCoasterForm'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      rollercoasters: [],
      themeparks: [],
      selectedRollercoaster: null,
      rollercoasterDetails: null
    }
  }

  async componentDidMount() {
    this.getAllRollerCoasters()
    this.getAllThemeParks()
  }

  getAllRollerCoasters = async () => {
    try {
      const res = await ApiClient.get('/rollercoaster')
      console.log(res)
      this.setState({ rollercoasters: res.data.rollercoasters })
    } catch (error) {
      throw error
    }
  }

  getAllThemeParks = async () => {
    try {
      const res = await ApiClient.get('/themepark')
      console.log(res)
      this.setState({ themeparks: res.data.themeparks })
    } catch (error) {
      throw error
    }
  }

  selectRollercoaster = (rollercoaster) => {
    console.log(rollercoaster)
    this.setState({ selectedRollercoaster: rollercoaster })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/coasters"
            component={(props) => (
              <CoasterList
                {...props}
                rollercoasters={this.state.rollercoasters}
              ></CoasterList>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App

{
  /* <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/rollercoaster" component={RollerCoasterCard} />
  <Route
    exact
    path="/rollercoaster"
    component={(props) => (
      <Rollercoaster
        {...props}
        rollercoasters={this.state.rollercoasters}
        selectedRollercoaster={this.state.selectedRollercoaster}
        selectRollercoaster={this.selectRollercoaster}
      />
    )}
  />
</Switch> */
}
