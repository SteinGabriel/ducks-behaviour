const mongoose = require('mongoose')
const router = require('express').Router()
const Locations = mongoose.model('Locations')

// Post method called when a new Locations is added
router.post('/', (req, res, next) => {
  const { body } = req

  console.log(body)
  // Checks if there is no country
  // and sends a 422 status code
  // with a error message
  if (!body.country) {
    return res.status(422).json({
      erros: {
        country: 'is required'
      }
    })
  }

  // Checks if there is no city
  // and sends a 422 status code
  // with a error message
  if (!body.city) {
    return res.status(422).json({
      erros: {
        city: 'is required'
      }
    })
  }

  // Checks if there is no adrress
  // and sends a 422 status code
  // with a error message
  if (!body.address) {
    return res.status(422).json({
      erros: {
        address: 'is required'
      }
    })
  }

  // Checks if there is no zip code
  // and sends a 422 status code
  // with a error message
  if (!body.zipCode) {
    return res.status(422).json({
      erros: {
        zipCode: 'is required'
      }
    })
  }

  // Creates an instance of the Location
  // with data coming from front end
  const finalLocation = new Locations(body)
  // Saves the new Locations into database
  return finalLocation
    .save()
    .then(() => res.json({ locations: finalLocation.toJSON() }))
    .catch(next)
})

// Gets all locations
// sorting by the last created
router.get('/', (req, res, next) => {
  return Locations.find()
    .sort({ createdAt: 'descending' })
    .then(locations =>
      res.json({ locations: locations.map(location => location.toJSON()) })
    )
    .catch(next)
})

router.param('id', (req, res, next, id) => {
  return Locations.findById(id, (err, location) => {
    if (err) {
      return res.sendStatus(404)
    } else if (ducks) {
      req.location = location
      return next()
    }
  }).catch(next)
})

// Gets an Locations by its id
router.get('/:id', (req, res, next) => {
  return res.json({
    location: req.location.toJSON() // does it finds automatically?
  })
})

// Not sure but I think this is the method called
// when a user intends to update an Locations
router.patch('/:id', (req, res, next) => {
  const { body } = req

  if (body.country !== 'undefined') {
    req.Locations.country = body.country
  }

  if (body.city !== 'undefined') {
    req.Locations.city = body.city
  }

  if (body.address !== 'undefined') {
    req.Locations.address = body.address
  }

  if (body.zipCode !== 'undefined') {
    req.Locations.zipCode = body.zipCode
  }

  return req.Locations.save()
    .then(() => res.json({ Locations: req.Locations.toJSON() }))
    .catch(next)
})

// Deletes an Locations by its id
router.delete('/:id', (req, res, next) => {
  return Locations.findByIdAndRemove(req.location._id)
    .then(() => res.sendStatus(200))
    .catch(next)
})

// exports the router
module.exports = router
