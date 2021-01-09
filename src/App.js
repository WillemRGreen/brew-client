import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    brews: []
  }

  componentDidMount() {
    if(TokenService.hasAuthToken()){
      ApiService.getBrews()
        .then((brews) => {
          this.setState({ brews })
        })
        .catch(error => {
          console.error({ error })
        })
    }
  }

  handleAddBrew = brew => {
    this.setState({
      brews: [
        ...this.state.brews,
        brew
      ]
    })
  }

  handleDeleteBrew = brewId => {
    this.setState({
      brews: this.state.brews.filter(brew => brew.id !== brewId)
    })
  }

  handleLoggedIn = e => {
      ApiService.getBrews()
        .then((brews) => {
          this.setState({ brews })
        })
        .catch(error => {
          console.error({ error })
        })
  }

  renderRoutes() {
    
  }

  render() {
    return (
      <h1> This is the app </h1>
    );
  }
  
}

export default App;
