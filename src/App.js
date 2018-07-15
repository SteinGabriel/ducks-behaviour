import React, { Component } from 'react'
import DateTimePicker from './components/DateTimePicker'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'

class App extends Component {
  handleSave(data) {}

  saveLocation(data) {}

  saveFood(data) {}

  render() {
    return (
      <FormControl>
        <DateTimePicker />
      </FormControl>
    )
  }
}

export default App
