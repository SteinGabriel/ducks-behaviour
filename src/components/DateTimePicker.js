import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

function DateAndTimePickers(props) {
  const { classes } = props

  const formatDate = date => {
    console.log(date)
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
      console.log(formattedDate)
    }

    return formattedDate
  }

  const getCurrentDate = () => {
    return formatDate(new Date())
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Time the ducks were fed"
        type="datetime-local"
        defaultValue={getCurrentDate()}
        value={this.state.date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  )
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DateAndTimePickers)
