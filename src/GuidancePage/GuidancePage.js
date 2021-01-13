import React, { Component } from 'react'
import Link from 'react-router-dom'

export default class GuidancePage extends Component {
    render() {
        return (
            <div>
                <h2>
                    Brewing Methods
                </h2>
                <ul>
                    <li>
                        Kalita
                    </li>
                    <li>
                        V60
                    </li>
                    <li>
                        automatic
                    </li>
                    <li>
                        aeropress
                    </li>
                    <li>
                        french press
                    </li>
                </ul>
            </div>
        )
    }
}