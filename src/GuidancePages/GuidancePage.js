import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './GuidancePage.css'

export default class GuidancePage extends Component {
    render() {
        return (
            <div className = 'guide-div'>
                <h2>
                    Brewing Methods
                </h2>
                <ul className = 'method-list'>
                    <li className = 'method-li'>
                        <Link to={'/kalita-info'}>
                            Kalita
                        </Link>
                    </li>
                    <li className = 'method-li'>
                        <Link to={'/v60-info'}>
                            V60
                        </Link>
                    </li>
                    <li className = 'method-li'>
                        <Link to={'/automatic-info'}>
                            Automatic
                        </Link>
                    </li>
                    <li className = 'method-li'>
                        <Link to={'/aeropress-info'}>
                            Aeropress
                        </Link>
                    </li>
                    <li className = 'method-li'>
                        <Link to={'/french-press-info'}>
                            French Press
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}