import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <div>
          <h2>Welcome to your coffee brewer's guide!</h2>
          <p>This is an app designed to help home baristas of all levels brew better coffee by providing guidance and records of all your brews. To get started, simply click on new brew, then fill in the information about the coffee you are brewing. The app will then fill in some suggested brewing specifications that you can adjust however you like, then save it to be used and adjusted again later.</p>
          <p>Click the register button below and set a username and password to get brewing!</p>
        </div>
        <div>
          <Link to={'/register'}>
            <button className='button'>
                Register
            </button>
          </Link>

          <Link to={'/login'}>
            <button className='button'>
                Login
            </button>
          </Link>
        </div>
        
      </div>
    )
  }
}
