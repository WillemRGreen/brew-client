import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import GuidancePage from './GuidancePage'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><GuidancePage /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
})