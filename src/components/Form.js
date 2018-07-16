import React, { Component } from 'react'
import DateTimePicker from './DateTimePicker'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import LocalDining from '@material-ui/icons/LocalDining'
import Grain from '@material-ui/icons/Grain'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      food: '',
      foodType: '',
      quantity: '',
      country: '',
      city: '',
      address: '',
      parkName: '',
      errors: []
    }
  }

  handleSubmit() {
    if (this.validateForm()) {
      const {
        food,
        foodType,
        quantity,
        country,
        city,
        address,
        parkName
      } = this.state

      const data = {
        food,
        foodType,
        quantity,
        country,
        city,
        address,
        parkName
      }

      console.log(data)
    }
  }

  validateForm() {
    const errors = []

    const {
      food,
      foodType,
      quantity,
      country,
      city,
      address,
      parkName
    } = this.state

    if (food === '' || food === 'undefined') {
      errors.push('Food')
    }

    if (foodType === '' || foodType === 'undefined') {
      errors.push('Food Type')
    }

    if (quantity === '' || quantity === 'undefined') {
      errors.push('Quantity')
    }

    if (country === '' || country === 'undefined') {
      errors.push('Country')
    }

    if (city === '' || city === 'undefined') {
      errors.push('City')
    }

    if (address === '' || address === 'undefined') {
      errors.push('Address')
    }

    if (parkName === '' || parkName === 'undefined') {
      errors.push('Park Name')
    }
    this.setState({ errors })
    // If there is no error returns true
    return errors.length === 0
  }

  handleOnChange(prop, value = '') {
    if (prop) {
      this.setState({ [prop]: value })
    }
  }

  render() {
    return (
      <div>
        <DateTimePicker />
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <LocalDining />
          </Grid>
          <Grid item>
            <TextField
              id="country"
              label="Country"
              onChange={e => this.handleOnChange('country', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              id="city"
              label="City"
              onChange={e => this.handleOnChange('city', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              id="address"
              label="Address"
              onChange={e => this.handleOnChange('address', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              id="parkName"
              label="Park Name"
              onChange={e => this.handleOnChange('parkName', e.target.value)}
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <LocalDining />
          </Grid>
          <Grid item>
            <TextField
              id="food"
              label="Food"
              onChange={e => this.handleOnChange('food', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              id="foodType"
              label="Type"
              autoComplete="current-password"
              onChange={e => this.handleOnChange('foodType', e.target.value)}
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Grain />
          </Grid>
          <Grid item>
            <TextField
              id="quantity"
              label="Ducks Quantity"
              onChange={e => this.handleOnChange('quantity', e.target.value)}
              type="number"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.handleSubmit()}
        >
          Save
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dateTime: state.home.dateTime
})

const mapDispatchToProps = dispatch => ({
  onDateTimeSelected: data => dispatch({ type: 'FORM_SUBMIT', data })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
