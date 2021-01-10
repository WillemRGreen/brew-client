import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './Redirection/PrivateRoute'
import PublicRoute from './Redirection/PublicRoute'
import EditBrew from './EditBrew/EditBrew'
import BrewDisplayPage from './BrewDisplayPage/BrewDisplayPage'
import AddBrewPage from './AddBrewPage/AddBrewPage'
import Header from './Header/Header'
import BrewList from './BrewList/BrewList'
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'
import ApiContext from './Context'
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
    return (
      <div>
        <PublicRoute
          path={'/login'}
          component={LoginPage}
        />
        <PublicRoute
          path={'/register'}
          component={RegisterPage}
        />
        <Route 
          path={'/landing-page'}
          component={LandingPage}
        />
        <PrivateRoute
          path='/'
          component={BrewList}
        />
        <PrivateRoute
          path='/edit/:brewId'
          component={EditBrew}
        />
        <PrivateRoute
          path='/brew/:brewId'
          component={BrewDisplayPage}
        />
        <PrivateRoute
          path='/new-brew'
          component={AddBrewPage}
        />
      </div>
    )
  }

  render() {
    const value = {
      brews: this.state.brews,
      addBrew: this.handleAddBrew,
      deleteBrew: this.handleDeleteBrew,
      loggedIn: this.handleLoggedIn
    }
    return (
      <ApiContext.Provider value={value}>
        <div>
          <header>
            <Header />
          </header>
          <div>
            {this.renderRoutes}
          </div>
        </div>
      </ApiContext.Provider>
      
    );
  }
  
}

export default App;
