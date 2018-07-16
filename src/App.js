import React, { Component } from 'react'
import DateTimePicker from './components/DateTimePicker'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  handleSave(data) {}

  saveLocation(data) {}

  saveFood(data) {}

  render() {
    return (
      <Provider store={store}>
        <FormControl>
          <DateTimePicker />
        </FormControl>
      </Provider>
    )
  }
}

export default App
