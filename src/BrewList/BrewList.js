import React, { Component } from 'react'
import Link from 'react-router-dom'

export default class BrewList extends Component {
    static defaultProps = {

    }

    static contextType = ApiContext;

    render() {
        const { brews=[] } = this.context;
        return (
            <div>
                <ul>
                    {brews.map(brew =>
                        <li key={brew.id}>
                            <IndBrew
                                id={brew.id}
                                name={brew.name}
                            />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}