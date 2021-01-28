import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import EditBrew from './EditBrew'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><EditBrew /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
})