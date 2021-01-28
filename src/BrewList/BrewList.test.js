import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BrewList from './BrewList'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><BrewList /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
})