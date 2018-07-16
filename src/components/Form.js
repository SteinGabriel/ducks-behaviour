import React, { Component } from 'react'
import DateTimePicker from './DateTimePicker'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import { Grain, LocalDining, LocationOn } from '@material-ui/icons'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import axios from 'axios'

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
      const data = {
        ...this.state
      }

      data.dateTime = this.props.dateTime

      console.log(data)
    }
  }

  validateForm() {
    const errors = []
    const { dateTime } = this.props
    const {
      food,
      foodType,
      quantity,
      country,
      city,
      address,
      parkName
    } = this.state

    if (dateTime === '' || dateTime === 'undefined') {
      errors.push('Date')
    }

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

    console.log(errors)
    return errors.length === 0
  }

  submitForm(data) {}

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
            <Grain />
          </Grid>
          <Grid item>
            <TextField
              required
              id="quantity"
              label="Ducks Quantity"
              onChange={e => this.handleOnChange('quantity', e.target.value)}
              type="number"
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
              required
              id="food"
              label="Food"
              onChange={e => this.handleOnChange('food', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              required
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
            <LocationOn />
          </Grid>
          <Grid item>
            <TextField
              required
              id="country"
              label="Country"
              onChange={e => this.handleOnChange('country', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="city"
              label="City"
              onChange={e => this.handleOnChange('city', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="address"
              label="Address"
              onChange={e => this.handleOnChange('address', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="parkName"
              label="Park Name"
              onChange={e => this.handleOnChange('parkName', e.target.value)}
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

export default connect(
  mapStateToProps,
  null
)(Form)
