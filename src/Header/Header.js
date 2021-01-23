import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className='header'>
                    <Link to={'/'}>
                        Brewer's Guide
                    </Link>
                </h1>
            </div>
        )
    }
}