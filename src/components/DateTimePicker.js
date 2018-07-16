import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Timer from '@material-ui/icons/Timer'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'

const getCurrentDate = () => {
  return formatDate(new Date())
}

// Returns formatted Date 'YYY-MM-DD HH:MM AM/PM'
const formatDate = date => {
  let formattedDate = ''
  if (date && typeof date === 'object') {
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    if (Number(day) < 10) day = '0' + day
    if (Number(month) < 10) month = '0' + month

    formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`
  }

  return formattedDate
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
    return (
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item>
          <Timer />
        </Grid>
        <Grid item>
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
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  dateTime: state.home.dateTime
})

const mapDispatchToProps = dispatch => ({
  onDateTimeSelected: data => dispatch({ type: 'DATE_SELECTED', data })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateAndTimePickers)
