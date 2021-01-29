import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../Context'
import './IndBrew.css'

export default class IndBrew extends Component {
    static defaultProps = {

    }

    static contextType = ApiContext;

    render() {
        const { name, id } = this.props
        return (
            //IndBrew being called by BrewList to generate brew items
            <div className = 'ind-brew'>
                <Link  
                    to={`/brew/${id}`}
                    className='brew-link'>
                    {name}
                </Link>
            </div>
        )
    }
}