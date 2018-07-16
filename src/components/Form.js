import React, { Component } from 'react'
import DateTimePicker from './DateTimePicker'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import { Grain, LocalDining, LocationOn } from '@material-ui/icons'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import axios from 'axios'

const ErrorMessage = styled.div`
  width: 500px;
  height: auto;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  background: #feaab9;
  color: #a01115;
`
const SuccessMessage = styled.div`
  width: 500px;
  height: auto;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  background: #d2ffe2;
  color: #1d8d39;
`

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      food: '',
      foodType: '',
      foodQuantity: '',
      ducksQuantity: '',
      country: '',
      city: '',
      address: '',
      parkName: '',
      zipCode: '',
      errors: [],
      submitStatusCode: 0
    }
  }

  handleSubmit() {
    if (this.validateForm()) {
      this.submitForm()
    }
  }

  validateForm() {
    const errors = []
    const { dateTime } = this.props
    const {
      food,
      foodType,
      foodQuantity,
      ducksQuantity,
      country,
      city,
      address,
      zipCode,
      parkName
    } = this.state

    if (dateTime === '' || dateTime === 'undefined') {
      errors.push('Date is required!')
    }

    if (food === '' || food === 'undefined') {
      errors.push('Food is required')
    }

    if (foodType === '' || foodType === 'undefined') {
      errors.push('Food Type is required')
    }

    if (foodQuantity === '' || foodQuantity === 'undefined') {
      errors.push('Food Quantity is required')
    }

    if (ducksQuantity === '' || ducksQuantity === 'undefined') {
      errors.push('Ducks Quantity is required')
    }

    if (country === '' || country === 'undefined') {
      errors.push('Country is required')
    }

    if (city === '' || city === 'undefined') {
      errors.push('City is required')
    }

    if (address === '' || address === 'undefined') {
      errors.push('Address is required')
    }

    if (zipCode === '' || zipCode === 'undefined') {
      errors.push('Zip Code is required')
    }

    if (parkName === '' || parkName === 'undefined') {
      errors.push('Park Name is required')
    }

    this.setState({ errors })
    // If there is no error returns true
    return errors.length === 0
  }

  async submitForm() {
    const data = {
      ...this.state
    }

    const duckFoodData = {
      name: data.food,
      type: data.foodType,
      quantity: data.foodQuantity
    }

    const locationData = {
      country: data.country,
      city: data.city,
      address: data.address,
      zipCode: data.zipCode,
      parkName: data.parkName
    }

    try {
      const ducksFoodId = await this.saveFood(duckFoodData)
      const locationId = await this.saveLocation(locationData)
      const fedDucksData = {
        food_id: ducksFoodId,
        location_id: locationId,
        ducksQty: data.ducksQuantity,
        foodQty: data.foodQuantity
      }

      await this.saveFedDucks(fedDucksData)
      this.setState({ submitStatusCode: 200 })
    } catch (error) {
      this.setState({ submitStatusCode: 500 })
    }
  }

  saveFood(data) {
    if (data) {
      const body = {
        ...data
      }

      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:5000/api/ducksfood', body)
          .then(response => {
            console.log(response)
            resolve(response.data.ducksFood._id)
          })
          .catch(err => reject(err))
      })
    }
  }

  saveLocation(data) {
    if (data) {
      const body = {
        ...data
      }

      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:5000/api/locations', body)
          .then(response => resolve(response.data.location._id))
          .catch(err => reject(err))
      })
    }
  }

  saveFedDucks(data) {
    if (data) {
      const body = {
        ...data
      }

      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:5000/api/fedducks', body)
          .then(response => {
            console.log(response)
            resolve(response.data)
          })
          .catch(err => reject(err))
      })
    }
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
            <Grain />
          </Grid>
          <Grid item>
            <TextField
              required
              id="quantity"
              label="How many ducks?"
              onChange={e =>
                this.handleOnChange('ducksQuantity', e.target.value)
              }
              type="number"
              margin="normal"
            />
          </Grid>
          <Grid item>
            <LocalDining />
          </Grid>
          <Grid item>
            <TextField
              required
              id="food"
              label="What food?"
              onChange={e => this.handleOnChange('food', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="foodType"
              label="What type of food?"
              onChange={e => this.handleOnChange('foodType', e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="foodQuantity"
              label="How much food?"
              type="number"
              onChange={e =>
                this.handleOnChange('foodQuantity', e.target.value)
              }
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
              id="address"
              label="Zip Code"
              onChange={e => this.handleOnChange('zipCode', e.target.value)}
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
          style={{ margin: '20px', width: '150px', background: '#6a1b9a' }}
        >
          Submit
        </Button>
        {this.state.errors.map(err => {
          return <ErrorMessage>{err}</ErrorMessage>
        })}
        {this.state.submitStatusCode === 500 && (
          <ErrorMessage>
            Something went wrong. Please, check your internet connection and try
            again.
          </ErrorMessage>
        )}
        {this.state.submitStatusCode === 200 && (
          <SuccessMessage>Form submitted. Thank you!</SuccessMessage>
        )}
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
