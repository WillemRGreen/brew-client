import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BrewList from '../BrewList/BrewList'
import TokenService from '../services/token-service'
import Button from '../Button/Button'
import './MainPage.css'

export default class MainPage extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }
    render() {
        return (
            <div>
                <nav className = 'group'>
                    <Link to={'/new-brew'}>
                        <Button className = 'item'>
                            Add new brew
                        </Button>
                    </Link>
                    <Link to={'/brew-guides'}>
                        <Button className = 'item'>
                            Guidance
                        </Button>
                    </Link>
                    <div className='item logout-button'>
                        <Link
                            to='/'>
                                <Button onClick={this.handleLogoutClick}>
                                    Logout
                                </Button>
                        </Link>
                    </div>
                </nav>
                <div>
                    <BrewList />
                </div>
            </div>
        )
    }
}