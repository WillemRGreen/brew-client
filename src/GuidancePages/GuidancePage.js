import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GuidancePage extends Component {
    render() {
        return (
            <div>
                <h2>
                    Brewing Methods
                </h2>
                <ul>
                    <li>
                        <Link to={'/kalita-info'}>
                            Kalita
                        </Link>
                    </li>
                    <li>
                        <Link to={'/v60-info'}>
                            V60
                        </Link>
                    </li>
                    <li>
                        <Link to={'/automatic-info'}>
                            Automatic
                        </Link>
                    </li>
                    <li>
                        <Link to={'/aeropress-info'}>
                            Aeropress
                        </Link>
                    </li>
                    <li>
                        <Link to={'/french-press-info'}>
                            French Press
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}