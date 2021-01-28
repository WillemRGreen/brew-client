import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BrewDisplayPage from './BrewDisplayPage'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><BrewDisplayPage /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
})