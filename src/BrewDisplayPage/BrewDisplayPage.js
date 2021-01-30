import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import ApiContext from '../Context'
import { findById } from '../brew-helpers'
import ApiService from '../services/api-services'
import './BrewDisplayPage.css'

export default class BrewDisplayPage extends React.Component {
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

  render() {
    const { brews=[] } = this.context
    const { brewId } = this.props.match.params
    const brew = findById(brews, parseInt(brewId)) || { description: '' }
    return (
      <section className='display-section'>
        <div className = 'group2'>
          <div className='specs-text'>
            <h4>{brew.name}</h4>
          </div>
          <div className='specs-text'>
            <p>Your Description:</p>
          </div>
          <div className='specs-text'>
            {brew.description}
          </div>
          <div>
              <ul className='specs-list specs-text'>
                  Brew Specs:
                  <li>
                      Method: {brew.method}
                  </li>
                  <li>
                      Coffee Input: {brew.input}g
                  </li>
                  <li>
                      Brew Weight: {brew.output}g
                  </li>
                  <li>
                      Grind Size: {brew.grind}
                  </li>
                  <li>
                      Roast Profile: {brew.roast_level}
                  </li>
              </ul>
          </div>
        </div>
        <div className='group-for-buttons'>

          <Button 
            className='button' 
            type='button' 
            onClick={this.handleDeleteBrew}>
              Delete Brew
          </Button>
          
          <Button
            className='button button-for-link'
            type='button'>
            <Link
              to={`/edit/${brewId}`}>
              Brew Again
            </Link>
          </Button>

          <Button
              tag='button'
              role='link'
              onClick={() => this.props.history.goBack()}
              className='button'>
            Back
          </Button>

      </div>
        
      </section>
    )
  }
}
