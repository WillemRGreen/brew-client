import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import IndBrew from './IndBrew'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><IndBrew /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
})