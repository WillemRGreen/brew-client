import React, { Component } from 'react'
import ApiContext from '../Context'
import IndBrew from '../IndBrew/IndBrew'
import './BrewList.css'

export default class BrewList extends Component {
    static defaultProps = {

    }

    static contextType = ApiContext;

    render() {
        const { brews=[] } = this.context;
        return (
            <div className = 'group'>
                <ul className = 'brew-list'>
                    {brews.map(brew =>
                        <li className = 'ind-brew' key={brew.id}>
                            <IndBrew
                                id={brew.id}
                                key={brew.id}
                                name={brew.name}
                            />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}