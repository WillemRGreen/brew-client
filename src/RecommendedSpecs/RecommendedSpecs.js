import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import ApiService from '../services/api-service'
import GenericForm from '../GenericForm/GenericForm'
import './AddFolderPage.css'

export default class AddBrewPage extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  state = {
    name: '',
    description: '',
    method: '',
    input: '',
    output: '',
    brew_time: '',
    grind: '',
    roast_level: '',
    error: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if(
      this.state.name.length > 0 && 
      this.state.description.length > 0 && 
      this.state.method.length > 0 && 
      this.state.input.length > 0 && 
      this.state.output.length > 0 && 
      this.state.brew_time.length > 0 && 
      this.state.grind.length > 0 && 
      this.state.roast_level.length > 0){
      const brew = {
        name: e.target['coffee-name'].value
      }
      ApiService.postBrew(brew.name)
        .then(brew => {
          this.context.addBrew(brew)
          this.context.loggedIn()
          this.props.history.push(`/brew/${brew.id}`)
        })
        .catch(error => {
          console.error({ error })
        })
    } else {
      this.setState({error: true})
    }
    
  }

  handleNameChange = e => {
    e.preventDefault()
    this.setState({name:e.currentTarget.value})
  }

  render() {
    let input = '';
    if(this.state.error){
      input =
      <div>
        <p className='lighter'>All fields are required</p>
      </div>
    }
    return (
      <section className='add-brew'>
        <h2>Create a brew</h2>
        <GenericForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='brew-name-input'>
              Name
            </label>
            <input name='brew-name-input' className='brew-name-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='brew-description-input'>
              Description
            </label>
            <input name='brew-description-input' className='brew-description-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='brew-method-select'>
              Method
            </label>
            <select>
                <option value='automatic'>
                    automatic
                </option>
                <option value='kalita'>
                    kalita
                </option>
                <option value='v60'>
                    v60
                </option>
                <option value='french-press'>
                    french press
                </option>
                <option value='aeropress'>
                    aeropress
                </option>
            </select>
          </div>
          <div className='field'>
            <label htmlFor='brew-input-input'>
              Name
            </label>
            <input name='brew-input-input' className='brew-input-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='brew-output-input'>
              Name
            </label>
            <input name='brew-output-input' className='brew-output-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='brew-brew-time-input'>
              Name
            </label>
            <input name='brew-brew-time-input' className='brew-brew-time-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='brew-grind-input'>
              Name
            </label>
            <input name='brew-grind-input' className='brew-grind-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='coffee-roast-level-select'>
              Method
            </label>
            <select>
                <option value='light'>
                    light
                </option>
                <option value='light/medium'>
                    light/medium
                </option>
                <option value='medium'>
                    medium
                </option>
                <option value='medium/dark'>
                    medium/dark
                </option>
                <option value='dark'>
                    dark
                </option>
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Submit Coffee
            </button>
          </div>
        </GenericForm>
      </section>
    )
  }
}