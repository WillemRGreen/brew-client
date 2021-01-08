import TokenService from './token-service'
import config from '../config'

const ApiService = {
  getBrews() {
    return fetch(`${config.API_ENDPOINT}/api/brews`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBrew(brewId) {
    return fetch(`${config.API_ENDPOINT}/api/brews/${brewId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postBrew( name, description, method, input, output, brew_time, grind, roast_level ) {
    return fetch(`${config.API_ENDPOINT}/api/brews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name, 
        description, 
        method, 
        input, 
        output, 
        brew_time, 
        grind, 
        roast_level
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  deleteBrew(id) {
    return fetch(`${config.API_ENDPOINT}/api/brews/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res
    )
  },
  patchBrew(id, newContent) {
    return fetch(`${config.API_ENDPOINT}/api/brews/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newContent)
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res
    )
  }
}

export default ApiService
