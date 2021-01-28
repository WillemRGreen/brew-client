import React, { Component } from 'react'
import GenericForm from '../GenericForm/GenericForm'
import AuthApiService from '../services/auth-api-service'
import Button from '../Button/Button'
import './RegisterPage.css'

export default class RegistrationPage extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {
        user_name.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className='register-page'>
        <GenericForm
          className='RegistrationPage'
          onSubmit={this.handleSubmit}>
          <div>
            {error && <p className='red'>{error}</p>}
          </div>
          <div className='user_name'>
            <label htmlFor='RegistrationPage__user_name'>
              User name
            </label>
            <input
              name='user_name'
              type='text'
              required
              id='RegistrationPage__user_name'>
            </input>
          </div>
          <div className='password'>
            <label htmlFor='RegistrationPage__password'>
              Password
            </label>
            <input
              name='password'
              type='password'
              required
              id='RegistrationPage__password'>
            </input>
          </div>
          <Button type='submit' className='register-button'>
            Register
          </Button>
        </GenericForm>
      </div>
    )
  }
}
