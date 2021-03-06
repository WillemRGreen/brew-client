import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../services/token-service'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    //redirect to landing page without appropriate token
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Component {...componentProps} />
          : <Redirect
              to={{
                pathname: '/landing-page',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  )
}
