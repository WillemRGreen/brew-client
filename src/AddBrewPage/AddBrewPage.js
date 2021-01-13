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
            <label htmlFor='coffee-name'>
              Name
            </label>
            <input name='coffee-name' className='coffee-name' placeholder='Coffee Name'></input>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add brew
            </button>
          </div>
          {input}
        </GenericForm>
      </section>
    )
  }
}