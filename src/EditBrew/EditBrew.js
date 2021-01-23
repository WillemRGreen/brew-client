import React, { Component } from 'react'
import GenericForm from '../GenericForm/GenericForm'
import ApiContext from '../Context'
import ApiService from '../services/api-services'
import { findById } from '../brew-helpers'
import './EditBrew.css'



export default class EditBookPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  state = {
    brew: {},
    name: '',
    description:'',
    method: '',
    input: '',
    output: '',
    brew_time: '',
    grind: '',
    roast_level: '',    
    error: false
  }

  componentDidMount() {
    const { brews=[] } = this.context
    const { brewId } = this.props.match.params
    const brew = findById(brews, parseInt(brewId)) || { description: '' }
    this.setState({ name: brew.name, description: brew.description})
  }

  handleSubmit = e => {
    e.preventDefault()
    const { brewId } = this.props.match.params;
    if(
        this.state.name.length > 0 &&
        this.state.description.length > 0 &&
        this.state.method.length > 0 &&
        this.state.input.length > 0 &&
        this.state.output.length > 0 &&
        this.state.brew_time.length > 0 &&
        this.state.grind.length > 0 &&
        this.state.roast_level.length > 0){
            const newBrew = {
                name: e.target['brew-name'].value,
                description: e.target['brew-description'].value,
                method: e.target['brew-method'].value,
                input: e.target['brew-input'].value,
                output: e.target['brew-output'].value,
                brew_time: e.target['brew-brew-time'].value,
                grind: e.target['brew-grind'].value,
                roast_level: e.target['brew-roast-level'].value,
              }
              ApiService.patchBrew(brewId, newBrew)
                .then(brew => {
                  this.context.addBrew(brewId, brew)
                  this.props.history.push('/')
                })
                .catch(error => {
                  console.error({ error })
                })
            } else {
              this.setState({ error: true })
            }
    }


  handleNameChange = (e) => {
    this.setState({name:e.currentTarget.value})
  }

  handleDescriptionChange = (e) => {
    this.setState({description:e.currentTarget.value})
  }

  handleMethodChange = (e) => {
    this.setState({method:e.currentTarget.value})
  }

  handleInputChange = (e) => {
    this.setState({input:e.currentTarget.value})
  }

  handleOutputChange = (e) => {
    this.setState({output:e.currentTarget.value})
  }

  handleBrewTimeChange = (e) => {
    this.setState({brew_time:e.currentTarget.value})
  }

  handleGrindChange = (e) => {
    this.setState({grind:e.currentTarget.value})
  }

  handleRoastLevelChange = (e) => {
    this.setState({roast_level:e.currentTarget.value})
  }

  render() {
    const { brews=[] } = this.context
    const { brewId } = this.props.match.params
    const brew = findById(brews, parseInt(brewId)) || { description: '' }
    let input = '';
    if(this.state.error){
        input = 
        <div>
            <p className='lighter'>All fields are required</p>
        </div>
    }
    return (
      <section className='add-brew'>
        <h2>Edit Brew</h2>
        <GenericForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='brew-name-input'>
              Name
            </label>
            <input defaultValue={brew.name} name='brew-name-input' className='brew-name-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='brew-description-input'>
              Description
            </label>
            <input defaultValue={brew.description} name='brew-description-input' className='brew-description-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='brew-method-select'>
              Method
            </label>
            <select defaulValue={brew.method} >
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
              Input
            </label>
            <input defaultValue={brew.input} name='brew-input-input' className='brew-input-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='brew-output-input'>
              Output
            </label>
            <input defaultValue={brew.output} name='brew-output-input' className='brew-output-input'></input>
          </div>
          <div className='field'>
            <label htmlFor='brew-grind-input'>
              Grind
            </label>
            <select defaultValue={brew.grind}>
              <option value='fine'>
                  fine
              </option>
              <option value='medium/fine'>
                  medium/fine
              </option>
              <option value='medium'>
                  medium
              </option>
              <option value='medium/coarse'>
                  medium/coarse
              </option>
              <option value='coarse'>
                  coarse
              </option>
            </select>
          </div>
          <div className='field'>
            <label htmlFor='coffee-roast-level-select'>
              Roast Level
            </label>
            <select defaultValue={brew.roast_level}>
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
              Submit Edits
            </button>
          </div>
        </GenericForm>
      </section>
    )
  }
}
