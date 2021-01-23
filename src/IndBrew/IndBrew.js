import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import './IndBrew.css'

export default class IndBrew extends Component {
    static defaultProps = {

    }

    static contextType = ApiContext;

    render() {
        const { name, id } = this.props
        return (
            <div className = 'ind-brew'>
                <Link  
                    to={`/brew/${id}`}>
                    {name}
                </Link>
            </div>
        )
    }
}