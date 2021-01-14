import React, { Component } from 'react'
import GenericForm from '../GenericForm/GenericForm'
import ApiContext from '../ApiContext'
import ApiService from '../services/api-service'
import { findById } from '../brew-helpers'
import './EditBrewPage.css'



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
            <label htmlFor='brew-roast-level-input'>
              Name
            </label>
            <input name='brew-roast-level-input' className='brew-roast-level-input'></input>
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
