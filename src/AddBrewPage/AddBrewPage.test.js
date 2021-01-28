import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddBrewPage from './AddBrewPage'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><AddBrewPage /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
})