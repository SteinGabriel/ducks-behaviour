import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('saves location', () => {
  const wrapper = shallow(<App />)
  const data = {
    time: ''
  }
  wrapper.instance().handleSave()
})
