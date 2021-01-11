import React, { Component } from 'react'
import Link from 'react-router-dom'
import BrewList from '../BrewList/BrewList'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to={'/new-brew'}>
                        <button>
                            Add new brew
                        </button>
                    </Link>
                    <Link to={'/brew-guides'}>
                        <button>
                            Guidance
                        </button>
                    </Link>
                </nav>
                <div>
                    <BrewList />
                </div>
            </div>
        )
    }
}