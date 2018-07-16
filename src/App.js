import React, { Component } from 'react'
import Form from './components/Form'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    )
  }
}

export default App
