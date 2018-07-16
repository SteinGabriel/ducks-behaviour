const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.promise = global.Promise

const isProduction = process.env.NODE_ENV === 'production'
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use(
  session({
    secret: 'DucksBehaviour',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
)

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/ducksbehaviour`,
  function(err) {
    if (err) {
      console.log('Error: ' + err)
    } else {
      console.log('Connected!')
    }
  }
)

if (!isProduction) {
  app.use(errorHandler())
  app.use(morgan('dev'))
} else {
  app.use(morgan('common'))
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../build')))
}

mongoose.set('debug', true)
// Models
require('./models/DucksFood')
require('./models/FedDucks')
require('./models/Locations')

// Routes
app.use(require('./routes'))

app.use((req, res, next) => {
  const err = new Error('Not Found!')
  err.status = 404
  next(err)
})

app.use((err, req, res) => {
  res.status(err.status || 500)

  res.json({
    errors: {
      message: err.message,
      error: isProduction ? err : {}
    }
  })
})
app.set('port', process.env.PORT || 5000)

const server = app.listen(app.get('port'), () =>
  console.log(`Server started on http://localhost:${app.get('port')}! :)`)
)
