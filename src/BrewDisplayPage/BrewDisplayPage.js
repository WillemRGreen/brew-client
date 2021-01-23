import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import { findById } from '../brews-helpers'
import ApiService from '../services/api-service'
import './BrewPage.css'

export default class BookPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteBrew = e => {
    e.preventDefault()
    const { brewId } = this.props.match.params
    ApiService.deleteBrew(brewId)
    .then(brew => {
      this.context.deleteBrew(brew)
      this.context.loggedIn()
      this.props.history.push(`/`)
    })
    .catch(error => {
      console.error({ error })
    })
  }

  markComplete = e => {
    e.preventDefault()
    const { brews=[] } = this.context
    const { brewId } = this.props.match.params
    const brew = findById(brews, parseInt(brewId)) || { description: '' }
    const newBrew = {
        id: brew.id,
        name: brew.name,
        description: brew.description,
        method: brew.method,
        input: brew.input,
        output: brew.output,
        grind: brew.grind,
        roast_level: brew.roast_level
    }
    ApiService.patchBrew(brewId, newBrew)
      .then(brew => {
        this.context.addBrew(brew)
        this.context.loggedIn()
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { brews=[] } = this.context
    const { brewId } = this.props.match.params
    const brew = findBrew(brews, parseInt(brewId)) || { description: '' }
    return (
      <section>
        <div>
        {brew.name}
        </div>
        <div>
          <p>Your Description:</p>
        </div>
        <div>
          {brew.description}
        </div>
        <div>
            <ul>
                Brew Specs:
                <li>
                    {brew.method}
                </li>
                <li>
                    {brew.input}
                </li>
                <li>
                    {brew.output}
                </li>
                <li>
                    {brew.grind}
                </li>
                <li>
                    {brew.roast_level}
                </li>
            </ul>
        </div>
        <div className='group-for-buttons'>
          <button 
            className='button' 
            type='button' 
            onClick={this.handleDeleteBrew}
          >
              Delete Brew
          </button>
          
              <button
                className='button'
                type='button'
              >
                <Link
                  to={`/edit/${brewId}`}
                >
                  Brew Again!
                </Link>
              </button>

        <button
            tag='button'
            role='link'
            onClick={() => this.props.history.goBack()}
            className='button'>
          Back
        </button>
      </div>
        
      </section>
    )
  }
}
