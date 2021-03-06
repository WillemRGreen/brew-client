import React, { Component } from 'react'
import ApiContext from '../Context'
import ApiService from '../services/api-services'
import GenericForm from '../GenericForm/GenericForm'
import Button from '../Button/Button'
import './AddBrewPage.css'

export default class AddBrewPage extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  state = {
    name: '',
    method: 'automatic',
    description: '',
    roast_level: 'light',
    output: '',
    error: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if(
      //form validation
      this.state.name.length > 0 &&
      this.state.roast_level.length > 0 &&
      this.state.output.length > 0 && 
      this.state.description.length > 0){
      const brew = {
        name: e.target['coffee-name'].value,
        method: e.target['coffee-method-select'].value,
        description: e.target['description'].value,
        roast_level: e.target['coffee-roast-level'].value,
        output: e.target['brew-weight'].value
      }
      ApiService.postBrew(brew)
      .then(brew => {
        this.context.addBrew(brew)
        this.context.loggedIn()
        this.props.history.push(`/brew/${brew.id}`)
      })
    } else {
      this.setState({error: true})
    }
    
  }

  handleNameChange = e => {
    e.preventDefault()
    this.setState({name:e.currentTarget.value})
  }

  handleMethodChange = e => {
    e.preventDefault()
    this.setState({method:e.currentTarget.value})
  }

  handleRoastChange = e => {
    e.preventDefault()
    this.setState({roast_level:e.currentTarget.value})
  }

  handleOutputChange = e => {
    e.preventDefault()
    this.setState({output:e.currentTarget.value})
  }

  handleDescriptionChange = e => {
    e.preventDefault()
    this.setState({description:e.currentTarget.value})
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
            <label htmlFor='coffee-name'>
              Name
            </label>
            <input onChange={this.handleNameChange} name='coffee-name' className='coffee-name' placeholder='Coffee Name'></input>
          </div>
          <div className='field'>
            <label htmlFor='coffee-method-select'>
              Method
            </label>
            <select defaultValue={'automatic'} name='coffee-method-select' onChange={this.handleMethodChange}>
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
            <label htmlFor='coffee-roast-level-select'>
              Method
            </label>
            <select defaultValue={'light'} name='coffee-roast-level' onChange={this.handleRoastChange}>
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
          <div>
            <label htmlFor='brew-weight'>
              Enter Brew Weight
            </label>
            <input onChange={this.handleOutputChange} name='brew-weight' className='brew-weight' placeholder='Enter your desired amount of coffee in grams'>
            </input>
          </div>
          <div>
            <label htmlFor='description'>
              Enter Description
            </label>
            <textarea onChange={this.handleDescriptionChange} name='description' className='description'>
            </textarea>
          </div>
          <div className='buttons'>
            <Button type='submit'>
              Add Brew
            </Button>
          </div>
          {input}
        </GenericForm>
      </section>
    )
  }
}