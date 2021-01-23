import React, { Component } from 'react'
import ApiContext from '../Context'
import IndBrew from '../IndBrew/IndBrew'

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