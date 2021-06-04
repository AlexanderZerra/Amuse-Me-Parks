import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ApiClient from './Globals'

import RollerCoasterCard from './component/RollerCoasterCard'
import TextInput from './component/TextInput'
import Nav from './component/Nav'

import Home from './pages/Home'
import CoasterList from './pages/CoasterList'
import RollerCoasterDetails from './pages/RollerCoasterDetails'
import ThemeList from './pages/ThemeList'
import RollerCoasterForm from './pages/RollerCoasterForm'

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

  createNewCoaster = async () => {
    try {
      const res = await ApiClient.post('/rollercoaster')
      console.log(res)

      this.setState({ rollercoasters: res.data.rollercoasters })
    } catch (error) {
      throw error
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await ApiClient.post('/rollercoaster', this.state)
      console.log(res)
      this.props.history.push(`/`)
      // this.setState({ rollercoasters: res.data.rollercoasters })
    } catch (error) {
      throw error
    }
  }

  // create a function to make a new rollercoaster " api client post"

  // REMEMBER TO CHECK ROUTE
  // check the "data"

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
            path="/new"
            component={(props) => (
              <RollerCoasterForm {...props} handleSubmit={this.handleSubmit} />
            )}
          />
          <Route
            path="/coasterdetails/:_id"
            component={(props) => (
              <RollerCoasterDetails
                {...props}
                getAllRollerCoasters={this.getAllRollerCoasters}
                rollercoasters={this.state.rollercoasters}
              ></RollerCoasterDetails>
            )}
          />
          <Route
            path="/coasters"
            component={(props) => (
              <CoasterList
                {...props}
                rollercoasters={this.state.rollercoasters}
              ></CoasterList>
            )}
          />
          <Route
            path="/themepark"
            component={(props) => (
              <ThemeList
                {...props}
                themeparks={this.state.themeparks}
              ></ThemeList>
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
