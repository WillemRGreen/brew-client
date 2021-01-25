import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './Redirection/PrivateRoute'
import PublicRoute from './Redirection/PublicRoute'
import EditBrew from './EditBrew/EditBrew'
import BrewDisplayPage from './BrewDisplayPage/BrewDisplayPage'
import AddBrewPage from './AddBrewPage/AddBrewPage'
import Header from './Header/Header'
import TokenService from './services/token-service'
import ApiService from './services/api-services'
import GuidancePage from './GuidancePages/GuidancePage'
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'
import LandingPage from './LandingPage/LandingPage'
import MainPage from './MainPage/MainPage'
import ApiContext from './Context'
import './App.css';
import Kalita from './GuidancePages/Kalita/Kalita'
import V60 from './GuidancePages/V60/V60'
import Aeropress from './GuidancePages/Aeropress/Aeropress'
import Automatic from './GuidancePages/Automatic/Automatic'
import FrenchPress from './GuidancePages/FrenchPress/FrenchPress'

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

  handleEditBrew = brew => {
    console.log(this.state.brews)
    this.setState({
      brews: [
        this.state.brews.filter(brewToFind => brewToFind.id !== brew.id),
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
        <PublicRoute 
          path={'/landing-page'}
          component={LandingPage}
        />
        <PrivateRoute
          exact
          path='/'
          component={MainPage}
        />
        <PrivateRoute
          path='/brew-guides'
          component={GuidancePage}
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
        <PrivateRoute
          path='/kalita-info'
          component={Kalita}
        />
        <PrivateRoute
          path='/V60-info'
          component={V60}
        />
        <PrivateRoute
          path='/aeropress-info'
          component={Aeropress}
        />
        <PrivateRoute
          path='/automatic-info'
          component={Automatic}
        />
        <PrivateRoute
          path='/french-press-info'
          component={FrenchPress}
        />
      </div>
    )
  }

  render() {
    const value = {
      brews: this.state.brews,
      addBrew: this.handleAddBrew,
      deleteBrew: this.handleDeleteBrew,
      editBrew: this.handleEditBrew,
      loggedIn: this.handleLoggedIn
    }
    return (
      <ApiContext.Provider value={value}>
        <div>
          <header>
            <Header />
          </header>
          <div className='main'>
            {this.renderRoutes()}
          </div>
        </div>
      </ApiContext.Provider>
      
    );
  }
  
}

export default App;
