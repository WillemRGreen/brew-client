import React from 'react'

export default React.createContext({
  brews: [],
  addBrew: () => {},
  deleteBrew: () => {},
  editBrew: () => {},
  loggedIn: () => {}
})
