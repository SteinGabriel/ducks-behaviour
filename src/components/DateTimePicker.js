import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

// Returns formatted Date 'YYY-MM-DD HH:MM AM/PM'
const formatDate = date => {
  let formattedDate = ''
  if (date && typeof date === 'object') {
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    if (Number(day) < 10) day = '0' + day
    if (Number(month) < 10) month = '0' + month

    formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`
  }

  return formattedDate
}

const getCurrentDate = () => {
  return formatDate(new Date())
}

class DateAndTimePickers extends Component {
  handleChangeDate = e => {
    const date = e.target.value
    const { onDateTimeSelected } = this.props

    if (date) {
      onDateTimeSelected(date)
    }
  }

  render() {
    console.log('state datetime ' + this.props.dateTime)
    const { onDateTimeSelected } = this.props
    return (
      <form noValidate>
        <TextField
          id="datetime"
          label="Time the ducks were fed"
          type="datetime-local"
          defaultValue={getCurrentDate()}
          onChange={this.handleChangeDate.bind(this)}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  dateTime: state.home.dateTime
})

const mapDispatchToProps = dispatch => ({
  onDateTimeSelected: data => {
    console.log('Date received -> ' + data)
    dispatch({ type: 'DATE_SELECTED', data })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateAndTimePickers)
